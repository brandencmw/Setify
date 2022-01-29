import React from "react";
import CSS from "csstype";
import Logo from "../../public/images/SpotifyLogo.svg";

const axios = require('axios');

function LoginButton() {
    const [color, setColor] = React.useState("black");
    function buttonHover() {
        setColor("#1DB954")
    }

    function buttonLeave() {
        setColor("#191616")
    }

    function buttonClick() {
        console.log('click');
        axios.get("http://localhost:5000/login");
    }

    const buttonStyle: CSS.Properties = {
        height: "auto",
        width: "auto",
        padding: "0 40px",
        border: "2px solid #1DB954",
        borderRadius: "40px",
        backgroundColor: color,
        color: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }

    const logoStyle: CSS.Properties = {
        height: "36px",
        marginRight: "18px"
    }

    return(
        <a href="http://localhost:5000/login">
            <button style={buttonStyle} onMouseEnter={buttonHover} onMouseLeave={buttonLeave} onClick={buttonClick}>
                <img src={Logo} style={logoStyle} />
                <h5 style={{fontSize: "14px"}}>Connect with Spotify</h5>
            </button>   
        </a>
    );
}

export default LoginButton;