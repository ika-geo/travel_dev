"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AboutTop_1 = __importDefault(require("./components/AboutTop"));
require("../../assets/style/style.css");
require("../../assets/style/about.css");
const OfferBest_1 = __importDefault(require("./components/OfferBest"));
const Advantages_1 = __importDefault(require("./components/Advantages"));
const About = () => {
    return (<div className="about">
            <AboutTop_1.default />
            <OfferBest_1.default />
            <Advantages_1.default />
        </div>);
};
exports.default = About;
