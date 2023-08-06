"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AdvantagesSVG1_1 = __importDefault(require("../../../assets/img/about/AdvantagesSVG1"));
const AdvantagesSVG2_1 = __importDefault(require("../../../assets/img/about/AdvantagesSVG2"));
const AdvantagesSVG3_1 = __importDefault(require("../../../assets/img/about/AdvantagesSVG3"));
const AdvantagesSVG4_1 = __importDefault(require("../../../assets/img/about/AdvantagesSVG4"));
const advantages = [
    {
        img: <AdvantagesSVG1_1.default />,
        title: "Complete Packages For All Your Wishes"
    },
    {
        img: <AdvantagesSVG2_1.default />,
        title: "Over 30 Years Of Experience"
    },
    {
        img: <AdvantagesSVG3_1.default />,
        title: "Expert Guides For You"
    },
    {
        img: <AdvantagesSVG4_1.default />,
        title: "Guaranteed fun at the best price!"
    },
];
const Advantages = () => {
    return (<div className="advantages coloredBG block">
            <div className="wrapper">
                <div className="advantages__block grid4">
                    {advantages.map(item => <div key={item.title} className="advantages__item">
                            {item.img}
                            <h2 className="advantages__title subTitle">{item.title}</h2>
                        </div>)}
                </div>
            </div>
        </div>);
};
exports.default = Advantages;
