"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const LoggedOutScreen_1 = __importDefault(require("./loggedout/LoggedOutScreen"));
const LoggedInScreen_1 = __importDefault(require("./loggedin/LoggedInScreen"));
const bodyStyle = {
    color: "white",
    flexGrow: "1",
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center",
    padding: "40px"
};
function Body() {
    const urlParams = new URLSearchParams(window.location.search);
    let token = urlParams.get('token');
    let disp;
    if (token != null) {
        disp = react_1.default.createElement(LoggedInScreen_1.default, null);
    }
    else {
        disp = react_1.default.createElement(LoggedOutScreen_1.default, null);
    }
    return (react_1.default.createElement("div", { style: bodyStyle }, disp));
}
exports.default = Body;
