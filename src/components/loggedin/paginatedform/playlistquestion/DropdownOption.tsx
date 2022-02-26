import React from "react";

interface optionProps {
    imgSrc: string | null,
    optionText: string,
    optionID: string
}

function DropdownOption(props: optionProps) {
    return (
    <option value={props.optionID} key={props.optionID}>{props.optionText.substring(0, 40)}</option>
    );
}

export default DropdownOption