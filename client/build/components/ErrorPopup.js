"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const Close_1 = __importDefault(require("@mui/icons-material/Close"));
function ErrorPopup(props) {
    function handleClick() {
        props.onClose();
    }
    return (react_1.default.createElement(material_1.Collapse, { in: props.open },
        react_1.default.createElement(material_1.Alert, { severity: "error", action: react_1.default.createElement(material_1.IconButton, { "aria-label": "close", color: "inherit", size: "small", onClick: handleClick },
                react_1.default.createElement(Close_1.default, { fontSize: "inherit" })), sx: { mb: 2 } },
            react_1.default.createElement(material_1.AlertTitle, null, "Missing Data"),
            props.text)));
}
exports.default = ErrorPopup;
