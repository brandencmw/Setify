"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_animated_radio_button_1 = __importDefault(require("react-native-animated-radio-button"));
function RadioField() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_native_animated_radio_button_1.default, { onPress: (isActive) => console.log("RadioButton isActive: ", isActive) }),
        react_1.default.createElement("h5", null, "Option Text")));
}
exports.default = RadioField;
