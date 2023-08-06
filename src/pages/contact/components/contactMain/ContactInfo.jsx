"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmailSVG_1 = __importDefault(require("../../../../assets/img/contact/EmailSVG"));
const PhoneSVG_1 = __importDefault(require("../../../../assets/img/contact/PhoneSVG"));
const LocationSVG_1 = __importDefault(require("../../../../assets/img/contact/LocationSVG"));
const InfoDetails = [
    {
        img: <LocationSVG_1.default />,
        text: 'Piazza Napoleone, Lucca, Tuscany',
        link: `https://www.google.ru/maps?q=Piazza+Napoleone,+Lucca,+Tuscany&newwindow=1&sxsrf=AJOqlzVcaw9rdSM78P-6PZ3f1-9_OUBWmA:1677871654332&iflsig=AK50M_UAAAAAZAJYNtZXiiGgghMSYp84RXxD9V5BGXYz&uact=5&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABMgUIIRCgATIFCCEQoAFQAFgAYJ0CaABwAHgAgAHDAYgBwwGSAQMwLjGYAQCgAQKgAQE&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiw-aOAv8D9AhX5QvEDHduDBxEQ_AUoAnoECAEQBA`
    },
    {
        img: <PhoneSVG_1.default />,
        text: '+123456789',
        link: `tel:+123456789`
    },
    {
        img: <EmailSVG_1.default />,
        text: 'mail.mail.com',
        link: `mailto: mail.mail.com`
    },
];
const ContactInfo = () => {
    return (<div className="contactInfo">
            <h1 className="title">Get In Touch!</h1>
            <p className="text">Fill up the form and our Team will get back to you within 24 hours.</p>

            <div className="infoDetails">
                {InfoDetails.map(item => <a key={item.text} href={item.link} className="infoDetail__item flex">{item.img}<span className="text">{item.text}</span></a>)}
            </div>
        </div>);
};
exports.default = ContactInfo;
