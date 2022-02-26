import React, { FormEvent } from "react";
import MethodQuestion from "./methodquestion/MethodQuestion";
import PlaylistQuestion from "./playlistquestion/PlaylistQuestion";

interface formProps {
    user: any
}

function PaginatedForm(props: formProps) {

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        let target = event.target as HTMLFormElement;
        Array.prototype.forEach.call(target.elements, (element: any) => {
             console.log(element.value);
        });
    }

    function onMerge(event: MouseEvent) {
        $('#submitButton').trigger('click');
    }

    return(
        <form className="container" onSubmit={handleSubmit} id='mergeForm'>
            {/* <h2 className="form-prompt">How would you like to merge your playlists?</h2>
            <MethodQuestion /> */}
            <h2 className='form-prompt'>Select your playlists<br />You can add up to five</h2>
            <PlaylistQuestion user={props.user} onMerge={onMerge}/>
            <button style={{display: 'none'}} type="submit" id="submitButton"></button>
        </form>
    );
}

export default PaginatedForm;