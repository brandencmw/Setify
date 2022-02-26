import React from "react";
import RadioField from "./RadioField";
import FormButton from "../FormButton";
import NextIcon from "../../../../public/images/NextIcon.svg";

function clickNext() {
    console.log("click")
}

function MethodQuestion() {
    return (
        <>
            <ul id="methodOptions">
                <li className="method-option"><RadioField text="Append" /></li>
                <li className="method-option"><RadioField text="Intersection" /></li>
                <li className="method-option"><RadioField text="Union"/></li>
                <li className="method-option"><RadioField text="Interleaved"/></li>
            </ul>
            <FormButton text="Next" iconLoc="right" icon={NextIcon} onClick={clickNext} buttonID={null}/>
        </>
    );
}

export default MethodQuestion;