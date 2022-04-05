"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const LoginButton_1 = __importDefault(require("./LoginButton"));
const loggedOutSectionStyle = {
    width: "500px",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "space-evenly",
};
function LoggedOutScreen() {
    return (react_1.default.createElement("section", { style: loggedOutSectionStyle },
        react_1.default.createElement("h1", { style: { fontSize: "60px", margin: "0" } }, "Welcome"),
        react_1.default.createElement("h2", { style: { fontSize: "30px", margin: "0" } }, "Please sign in with your Spotify account to continue"),
        react_1.default.createElement(LoginButton_1.default, null)));
}
exports.default = LoggedOutScreen;
