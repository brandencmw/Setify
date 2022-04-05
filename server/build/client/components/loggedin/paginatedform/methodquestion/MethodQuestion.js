"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const RadioField_1 = __importDefault(require("./RadioField"));
const FormButton_1 = __importDefault(require("../FormButton"));
const NextIcon_svg_1 = __importDefault(require("../../../../assets/images/NextIcon.svg"));
function MethodQuestion(props) {
    return (react_1.default.createElement("div", { className: "method-question" },
        react_1.default.createElement("h2", { className: "form-prompt" }, "How would you like to merge your playlists?"),
        react_1.default.createElement("ul", { id: "methodOptions" },
            react_1.default.createElement("li", { className: "method-option" },
                react_1.default.createElement(RadioField_1.default, { text: "Append", onChange: props.onChange, currentMethod: props.formData.method, description: 'Puts tracks in order one playlist after the other' })),
            react_1.default.createElement("li", { className: "method-option" },
                react_1.default.createElement(RadioField_1.default, { text: "Intersection", onChange: props.onChange, currentMethod: props.formData.method, description: 'Includes tracks that are found in all playlsts selected' })),
            react_1.default.createElement("li", { className: "method-option" },
                react_1.default.createElement(RadioField_1.default, { text: "Union", onChange: props.onChange, currentMethod: props.formData.method, description: 'Includes tracks that are found in at least one of the selected playlists' })),
            react_1.default.createElement("li", { className: "method-option" },
                react_1.default.createElement(RadioField_1.default, { text: "Interleaved", onChange: props.onChange, currentMethod: props.formData.method, description: 'Alternates between all selected playlists, adding one song from each at a time' })),
            react_1.default.createElement("li", { className: "method-option" },
                react_1.default.createElement(RadioField_1.default, { text: "Symmetric Difference", onChange: props.onChange, currentMethod: props.formData.method, description: 'Includes only songs that are not in the intersection of the playlists' }))),
        react_1.default.createElement("div", { className: 'next-button-wrapper' },
            react_1.default.createElement(FormButton_1.default, { text: "Next", iconLoc: "right", icon: NextIcon_svg_1.default, onClick: props.onNext, buttonID: null }))));
}
exports.default = MethodQuestion;
