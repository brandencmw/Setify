"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const List_1 = __importDefault(require("@mui/material/List"));
const ListItem_1 = __importDefault(require("@mui/material/ListItem"));
const ListItemAvatar_1 = __importDefault(require("@mui/material/ListItemAvatar"));
const Avatar_1 = __importDefault(require("@mui/material/Avatar"));
const ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
const URLBox_1 = __importDefault(require("./URLBox"));
const RepeatBox_1 = __importDefault(require("./RepeatBox"));
function ResultSuccess(props) {
    console.log(props.playlistInfo);
    return (react_1.default.createElement("div", { className: "result-success" },
        react_1.default.createElement("h2", { className: 'form-prompt' },
            "Your playlists have been merged",
            react_1.default.createElement("br", null),
            "Check out the track list below"),
        react_1.default.createElement(List_1.default, null, props.tracks.map((track) => {
            return (react_1.default.createElement(ListItem_1.default, { key: track.uri },
                react_1.default.createElement(ListItemAvatar_1.default, null,
                    react_1.default.createElement(Avatar_1.default, { src: track.imageURL })),
                react_1.default.createElement(ListItemText_1.default, { primary: track.name + ' - ' + track.artistName })));
        })),
        react_1.default.createElement(URLBox_1.default, { url: props.playlistInfo.url }),
        react_1.default.createElement(RepeatBox_1.default, { onReset: props.onReset })));
}
exports.default = ResultSuccess;
