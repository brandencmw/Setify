"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const InfoOutlined_1 = __importDefault(require("@mui/icons-material/InfoOutlined"));
const Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
function RadioField(props) {
    const id = props.text.toLowerCase();
    console.log(id);
    return (react_1.default.createElement("div", { className: 'radio-field' },
        react_1.default.createElement("input", { type: "radio", name: "selector", value: id, id: id, onChange: props.onChange, checked: id === props.currentMethod }),
        react_1.default.createElement("label", { htmlFor: id }, props.text),
        react_1.default.createElement("div", { className: "check" }),
        react_1.default.createElement(Tooltip_1.default, { title: props.description, placement: 'right' },
            react_1.default.createElement(InfoOutlined_1.default, null))));
}
exports.default = RadioField;
