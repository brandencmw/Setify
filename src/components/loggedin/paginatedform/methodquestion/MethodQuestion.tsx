import React from "react";
import RadioField from "./RadioField";

function MethodQuestion() {
    return (
        <div>
            <RadioField text="Append" />
            <RadioField text="Intersection" />
            <RadioField text="Union"/>
            <RadioField text="Interleaved"/>
        </div>
    );
}

export default MethodQuestion