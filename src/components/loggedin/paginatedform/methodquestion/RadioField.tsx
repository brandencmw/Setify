import React from "react";

interface radioText {
    text: string
}

function RadioField(props: radioText) {
    let id = props.text.toLowerCase();
    return(
        <div>
            <input type="radio" name="selector" value={id} id={id}/>
            <label htmlFor={id}>{props.text}</label>
            <div className="check"></div>
        </div>
    );
}

export default RadioField;