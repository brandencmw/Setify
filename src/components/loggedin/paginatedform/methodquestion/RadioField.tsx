import React from "react";
import CSS from 'csstype';

interface radioText {
    text: string
}

const fieldStyle: CSS.Properties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
}

function RadioField(props: radioText) {
    return(
        <div style={fieldStyle}>
            <input type="radio" name="method"/>
            <h5>{props.text}</h5>
        </div>
    );
}

export default RadioField;