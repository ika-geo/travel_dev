"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
require("./logo.css");
const Logo = () => {
    return (<div className="logo">
            <react_router_dom_1.Link to="/">
                <img src={require("../../assets/img/logo.png")} alt="logo"/>
                <h2 className="logoText">Tuscany</h2>
            </react_router_dom_1.Link>
        </div>);
};
exports.default = Logo;
