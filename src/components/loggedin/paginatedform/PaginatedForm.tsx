import React from "react";
import MethodQuestion from "./methodquestion/MethodQuestion";


function PaginatedForm() {
    return(
        <form className="container">
            <h2 className="form-prompt">How would you like to merge your playlists?</h2>
            <MethodQuestion />
        </form>
    );
}

export default PaginatedForm;