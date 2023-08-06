"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Header_1 = __importDefault(require("./header/Header"));
const Footer_1 = __importDefault(require("./Footer"));
const react_router_dom_1 = require("react-router-dom");
const HeaderFooter = () => {
    return (<>
            <Header_1.default />
            <react_router_dom_1.Outlet />
            <Footer_1.default />
        </>);
};
exports.default = HeaderFooter;
