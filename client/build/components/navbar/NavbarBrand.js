"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const navBrandStyle = {
    fontSize: "24px",
    color: "#1DB954",
};
const appName = "{ Setify }";
function NavbarBrand() {
    return (react_1.default.createElement("h4", { style: navBrandStyle }, appName));
}
exports.default = NavbarBrand;
