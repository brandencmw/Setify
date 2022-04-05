"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const footerStyle = {
    marginTop: "auto",
    height: "50px",
    width: "100%"
};
function Footer() {
    return (react_1.default.createElement("footer", { style: footerStyle },
        react_1.default.createElement("p", null,
            "\u00A9Branden Wheeler ",
            new Date().getFullYear())));
}
exports.default = Footer;
