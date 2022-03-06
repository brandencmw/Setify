"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const PaginatedForm_1 = __importDefault(require("./paginatedform/PaginatedForm"));
function LoggedInScreen() {
    return (react_1.default.createElement(PaginatedForm_1.default, null));
}
exports.default = LoggedInScreen;
