"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContactMain_1 = __importDefault(require("./components/ContactMain"));
const ContactMap_1 = __importDefault(require("./components/ContactMap"));
require("../../assets/style/contact.css");
const Contact = () => {
    return (<div className="contact">
            <ContactMain_1.default />
            <ContactMap_1.default />
        </div>);
};
exports.default = Contact;
