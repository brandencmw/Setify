require("dotenv").config();

const path = require('path')
const express = require('express');
const querystring = require('querystring');
const axios = require('axios');
const cors = require('cors');
const app = express();
const authorize = 'https://accounts.spotify.com/authorize'
const redirectURI = "http://localhost:5000/callback";


app.use(express.static(__dirname + '/src/public'));
app.use(express.json())
app.use(cors())
app.use(express.static('public'));

function generateRandomString(length: number) {
  let randomString = ''
  for (let i = 0; i < length; i++) {
    randomString += String.fromCharCode(Math.floor(Math.random()*26)+97); 
  }
  return randomString;
}

app.get('/login', (req: any, res: any) => {
  let scope = 'playlist-modify-private playlist-read-collaborative playlist-read-private playlist-modify-public user-read-email';
  let state = generateRandomString(16);
  res.redirect('https://accounts.spotify.com/authorize?' +
  querystring.stringify({
    response_type: 'code',
    client_id: process.env.SPOTIFY_ID,
    state: state,
    scope: scope,
    redirect_uri: redirectURI,
    show_dialog: 'true'
  }));
});

app.get('/callback', (req: any, res: any) => {
  axios({
    url: 'https://accounts.spotify.com/api/token',
    method: 'post',
    params: {
      grant_type: 'client_credentials'
    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    auth: {
      username: process.env.SPOTIFY_ID,
      password: process.env.SPOTIFY_SECRET
    }
  }).then((response: any) => {
    let token = response.data.access_token
    res.redirect("http://localhost:3000/?token=" + token);
  }).catch((err: any) => {
    console.log(err);
  })
});

app.listen(5000, (req: any, res: any) => {
  console.log('Server started on port 5000');
});
