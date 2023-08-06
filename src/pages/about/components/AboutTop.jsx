"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const AboutTop = () => {
    return (<div className="aboutTop block">
            <div className="wrapper">
                <div className="aboutTop__block">
                    <h1 className="aboutTop__title handwritingTitle">Our team cares about your full relax</h1>
                    <p className="aboutTop__text">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                    <react_router_dom_1.Link to="/" className="aboutTop__button button">View our Tour Packages</react_router_dom_1.Link>
                </div>
            </div>
        </div>);
};
exports.default = AboutTop;
