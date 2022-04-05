"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Loop_1 = __importDefault(require("@mui/icons-material/Loop"));
function RepeatBox(props) {
    return (react_1.default.createElement("div", { className: "repeat-box", onClick: props.onReset },
        react_1.default.createElement("p", null, "Create another"),
        react_1.default.createElement(Loop_1.default, null)));
}
exports.default = RepeatBox;
