import React from 'react';
import FormButton from '../FormButton';
import PlusIcon from '../../../../public/images/PlusIcon.svg';
import PlaylistDropdown from './PlaylistDropdown';



function PlaylistQuestion() {

    const [playlists, setPlaylists] = React.useState([1, 2]);

    function addPlaylist(playlist: any) {
        setPlaylists((prevPlaylists) => {
            return [...prevPlaylists, playlist]
        })
    }

    return(
        <>
            {playlists.map((playlist, i) => {
                return(
                    <PlaylistDropdown playlistNum={i+1} key={i+1} />
                )
            })}
            <FormButton text="" iconLoc='left' icon={PlusIcon} onClick={addPlaylist} />
        </>
    );
}

export default PlaylistQuestion;