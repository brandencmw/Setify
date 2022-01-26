import React from "react";
import CSS from "csstype";

const navLinkStyle: CSS.Properties = {
    margin: "auto 10px"
}

interface linkText {
    text: string
}

function NavbarLink(props:linkText) {
    return (
        <a><h5 style={navLinkStyle}>{props.text}</h5></a>
    );
}

export default NavbarLink;