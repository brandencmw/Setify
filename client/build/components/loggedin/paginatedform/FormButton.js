"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function FormButton(props) {
    if (props.iconLoc === 'left') {
        return (react_1.default.createElement("div", { className: 'form-button', onClick: props.onClick, id: `button${props.buttonID}` },
            react_1.default.createElement("img", { src: props.icon, id: `buttonImg${props.buttonID}`, alt: '' }),
            react_1.default.createElement("h5", null, props.text)));
    }
    else {
        return (react_1.default.createElement("div", { className: 'form-button', onClick: props.onClick, id: `button${props.buttonID}` },
            react_1.default.createElement("h5", null, props.text),
            react_1.default.createElement("img", { src: props.icon, alt: "", id: `buttonImg${props.buttonID}` })));
    }
}
exports.default = FormButton;
