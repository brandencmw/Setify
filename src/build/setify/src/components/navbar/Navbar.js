"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const NavbarBrand_1 = __importDefault(require("./NavbarBrand"));
const NavbarLink_1 = __importDefault(require("./NavbarLink"));
const navbarStyle = {
    padding: "10px 40px",
    height: "50px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "PlusJakartaSans",
    color: "white"
};
const navLinksStyle = {
    display: "flex",
    flexDirection: "inherit",
};
function Navbar() {
    return (react_1.default.createElement("div", { style: navbarStyle },
        react_1.default.createElement(NavbarBrand_1.default, null),
        react_1.default.createElement("div", { style: navLinksStyle },
            react_1.default.createElement(NavbarLink_1.default, { text: "About" }),
            react_1.default.createElement(NavbarLink_1.default, { text: "Contact" }))));
}
exports.default = Navbar;
