import React from "react";

interface optionProps {
    imgSrc: string | null,
    optionText: string,
    optionID: string
}

function DropdownOption(props: optionProps) {
    return (
    <option value={props.optionID} key={props.optionID}>{props.optionText}</option>
    );
}

export default DropdownOption