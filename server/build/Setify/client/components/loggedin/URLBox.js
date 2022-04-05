"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ContentCopy_1 = __importDefault(require("@mui/icons-material/ContentCopy"));
const Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
function URLBox(props) {
    return (react_1.default.createElement("div", { className: 'url-wrapper' },
        react_1.default.createElement("p", null, "Share this playlist with your friends"),
        react_1.default.createElement(Tooltip_1.default, { title: 'Copy', placement: 'top-end' },
            react_1.default.createElement("div", { className: 'url-box' },
                react_1.default.createElement("p", { className: 'url-text' }, props.url.length > 30 ? `${props.url.substring(0, 50)}...` : props.url),
                react_1.default.createElement(ContentCopy_1.default, null)))));
}
exports.default = URLBox;
