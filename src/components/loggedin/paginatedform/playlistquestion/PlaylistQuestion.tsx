import React from 'react';
import FormButton from '../FormButton';
import PlusIcon from '../../../../public/images/PlusIcon.svg';
import PlaylistDropdown from './PlaylistDropdown';
import axios from 'axios';


interface playlistQProps {
    user: any
}


function PlaylistQuestion(props: playlistQProps) {

    const [playlists, setPlaylists] = React.useState([]);
    const [numOfPlaylists, setNumOfPlaylists] = React.useState(2);

    function addDropdown() {
        if(numOfPlaylists < 5) {
            setNumOfPlaylists(numOfPlaylists+1);
        }
    }

    function removeDropdown() {
        if(numOfPlaylists > 2) {
            setNumOfPlaylists(numOfPlaylists-1);
        }
    }


    React.useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/get-playlists',
            headers: {
                'User': props.user.userID
            }
        }).then((playlists: any) => {
            setPlaylists(playlists.data.playlists);
        }).catch((err: any) => {
            console.log(err);
        });
    });

    
    let dropdowns = [];
    for(let i=0; i < numOfPlaylists; i++) {
        dropdowns.push(<PlaylistDropdown playlists={playlists} dropdownNum={i+1} key={i+1} onRemove={removeDropdown}/>);
    }

    function renderButton() {
        if(numOfPlaylists < 5) {
            return <FormButton text="" iconLoc='left' icon={PlusIcon} onClick={addDropdown} />
        }
    }

    return(
        <div className='playlist-question'>
            {dropdowns}
            {renderButton()}
        </div>
    );
}

export default PlaylistQuestion;