"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const App_1 = __importDefault(require("./App"));
const ReactDOM = require('react-dom/client');
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App_1.default />);
