import axios from "axios";
import e from "express";

require("dotenv").config();
const path = require('path')
const express = require('express');
const querystring = require('querystring');
const cors = require('cors');
const app = express();

// Spotify API config
const SpotifyWebAPI = require('spotify-web-api-node');
const redirectURI = "http://localhost:5000/callback";
const spotifyCredentials = {
  clientId: process.env.SPOTIFY_ID,
  clientSecret: process.env.SPOTIFY_SECRET,
  redirectUri: redirectURI,
}
const spotifyAPI = new SpotifyWebAPI(spotifyCredentials);

app.use(express.static(__dirname + '/src/public'));
app.use(express.json())
app.use(cors())
app.use(express.static('public'));

function generateRandomString(length: number) {
  let randomString: String = ''
  for (let i = 0; i < length; i++) {
    randomString += String.fromCharCode(Math.floor(Math.random()*26)+97); 
  }
  return randomString;
}

app.get('/login', (req: any, res: any) => {
  const scopes = [
    'playlist-modify-private',
    'playlist-read-collaborative', 
    'playlist-read-private', 
    'playlist-modify-public', 
    'user-read-email',
    'user-read-private',
  ];
  // const state = generateRandomString(16);
  res.redirect(spotifyAPI.createAuthorizeURL(scopes/*, state*/) + '&show_dialog=true');
});

app.get('/callback', (req: any, res: any) => {
  const error = req.query.error;
  const code = req.query.code;
  const state = req.query.state;

  if(error) {
    console.error('Callback error: ' + error);
    res.send('Callback error: ' + error);
    return;
  }

  spotifyAPI.authorizationCodeGrant(code).then((data: any) => {
    const expires_in = data.body['expires_in'];
    const access_token = data.body['access_token']
    const refresh_token = data.body['refresh_token']
    spotifyAPI.setAccessToken(access_token);
    spotifyAPI.getMe().then((data: any) => {
      console.log(data);
    }).catch((err: any) => {
      console.log(err);
    })

    setInterval(async () => {
      const data = await spotifyAPI.refreshAccessToken();
      const access_token = data.body['access_token'];

      console.log('The access token has been refreshed!');
      console.log('access_token:', access_token);
      spotifyAPI.setAccessToken(access_token);
    }, expires_in / 2 * 1000);
    res.redirect(`http://localhost:3000/?token=${data.body['access_token']}&refresh_token=${data.body['refresh_token']}`);
  }).catch((err: any) => {
    console.error('Error getting Tokens:', err);
    res.send(`Error getting Tokens: ${err}`);
  });
});

function processUserData(data: any) {
  return {
    displayName: data.body.display_name, 
    userID: data.body.id
  }
}

app.get('/get-userdata', (req: any, res: any) => {

  spotifyAPI.setAccessToken(req.headers['authorization']);
  console.log(spotifyAPI.getAccessToken());
  spotifyAPI.getMe().then((data: any) => {
      res.send(processUserData(data));
  }).catch((err: any) => {
    res.send('user data error: ' + err);
    console.log(err);
  });
});


function processPlaylistData(data: any) {
  const playlists: Array<any> = [];
  let imgSrc: string | null;
  data.forEach((playlist: any) => {
    console.log(playlist);
    playlist.images ? imgSrc = playlist.images[0].url : null;

    playlists.push({
      id: playlist.id,
      imgSrc: imgSrc,
      name: playlist.name
    });
  });

  return playlists;
}

app.get('/get-playlists', (req: any, res: any) => {
  spotifyAPI.getUserPlaylists(req.headers['user']).then((data: any) => {
    const playlists = processPlaylistData(data.body.items);
    res.send({
      playlists: playlists
    });
  }).catch((err: any) => {
    console.log(err);
  });
});

app.listen(5000, (req: any, res: any) => {
  console.log('Server started on port 5000');
});
