"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SpotifyLogo_svg_1 = __importDefault(require("../../public/images/SpotifyLogo.svg"));
const axios = require('axios');
function LoginButton() {
    const [color, setColor] = react_1.default.useState("black");
    function buttonHover() {
        setColor("#1DB954");
    }
    function buttonLeave() {
        setColor("#191616");
    }
    function buttonClick() {
        console.log('click');
        axios.get("http://localhost:5000/login");
    }
    const buttonStyle = {
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
    };
    const logoStyle = {
        height: "36px",
        marginRight: "18px"
    };
    return (react_1.default.createElement("a", { href: "http://localhost:5000/login" },
        react_1.default.createElement("button", { style: buttonStyle, onMouseEnter: buttonHover, onMouseLeave: buttonLeave, onClick: buttonClick },
            react_1.default.createElement("img", { src: SpotifyLogo_svg_1.default, style: logoStyle }),
            react_1.default.createElement("h5", { style: { fontSize: "14px" } }, "Connect with Spotify"))));
}
exports.default = LoginButton;
