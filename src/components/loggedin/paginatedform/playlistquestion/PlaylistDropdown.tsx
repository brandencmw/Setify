import React from "react";

interface dropdownProps {
    playlistNum: number
}

function PlaylistDropdown(props:dropdownProps) {
    return(
        <div>
            <h5>Playlist {props.playlistNum}</h5>
        </div>
    );
}

export default PlaylistDropdown;