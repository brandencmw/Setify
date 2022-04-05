"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const navLinkStyle = {
    margin: "auto 10px",
    color: "white",
    textDecoration: "none"
};
function NavbarLink(props) {
    return (react_1.default.createElement("a", { href: props.link, style: navLinkStyle },
        react_1.default.createElement("h4", null, props.text)));
}
exports.default = NavbarLink;
