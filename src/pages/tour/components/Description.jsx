"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Description = ({ text }) => {
    return (<div className="tourDescription">
            <h2 className="subTitle">Details</h2>
            <p className="text">{text}</p>
        </div>);
};
exports.default = Description;
