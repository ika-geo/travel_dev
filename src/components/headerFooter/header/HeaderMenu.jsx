"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const HeaderMenu = ({ onClickHandle }) => {
    return (<>
            <nav>
                <ul className="menuItems flex">
                    <li><react_router_dom_1.Link onClick={onClickHandle} to="/">Home</react_router_dom_1.Link></li>
                    <li><react_router_dom_1.Link onClick={onClickHandle} to="/about">About Us</react_router_dom_1.Link></li>
                    <li><react_router_dom_1.Link onClick={onClickHandle} to="/tours">Tour Packages</react_router_dom_1.Link></li>
                    <li><react_router_dom_1.Link onClick={onClickHandle} to="/contact">Contact Us</react_router_dom_1.Link></li>
                </ul>
            </nav>
        </>);
};
exports.default = HeaderMenu;
