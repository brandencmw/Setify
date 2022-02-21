import React from "react";
import MethodQuestion from "./methodquestion/MethodQuestion";
import PlaylistQuestion from "./playlistquestion/PlaylistQuestion";

const playlists = [1, 2, 3]

function PaginatedForm() {
    return(
        <form className="container">
            {/* <h2 className="form-prompt">How would you like to merge your playlists?</h2>
            <MethodQuestion /> */}
            <h2 className='form-prompt'>Select your playlists<br />You can add up to five</h2>
            <PlaylistQuestion />
        </form>
    );
}

export default PaginatedForm;