"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContactInfo_1 = __importDefault(require("./contactMain/ContactInfo"));
const ContactForm_1 = __importDefault(require("./contactMain/ContactForm"));
const ContactMain = () => {
    return (<div className="contact__main coloredBG">
            <div className="wrapper">
                <div className="contact__mainBlock grid2">
                    <ContactInfo_1.default />
                    <ContactForm_1.default />
                </div>
            </div>
        </div>);
};
exports.default = ContactMain;
