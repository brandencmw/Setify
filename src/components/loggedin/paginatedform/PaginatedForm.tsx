import React from "react";
import MethodQuestion from "./methodquestion/MethodQuestion";
import PlaylistQuestion from "./playlistquestion/PlaylistQuestion";

interface formProps {
    user: any
}

function PaginatedForm(props: formProps) {
    return(
        <form className="container">
            {/* <h2 className="form-prompt">How would you like to merge your playlists?</h2>
            <MethodQuestion /> */}
            <h2 className='form-prompt'>Select your playlists<br />You can add up to five</h2>
            <PlaylistQuestion user={props.user} />
        </form>
    );
}

export default PaginatedForm;