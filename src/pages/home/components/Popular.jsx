"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SVG1_1 = __importDefault(require("../../../assets/img/home/SVG/SVG1"));
const SVG2_1 = __importDefault(require("../../../assets/img/home/SVG/SVG2"));
const SVG3_1 = __importDefault(require("../../../assets/img/home/SVG/SVG3"));
const SVG4_1 = __importDefault(require("../../../assets/img/home/SVG/SVG4"));
const SVG5_1 = __importDefault(require("../../../assets/img/home/SVG/SVG5"));
const SVG6_1 = __importDefault(require("../../../assets/img/home/SVG/SVG6"));
const SVG7_1 = __importDefault(require("../../../assets/img/home/SVG/SVG7"));
const SVG8_1 = __importDefault(require("../../../assets/img/home/SVG/SVG8"));
const SVG9_1 = __importDefault(require("../../../assets/img/home/SVG/SVG9"));
const SVG10_1 = __importDefault(require("../../../assets/img/home/SVG/SVG10"));
const SVG11_1 = __importDefault(require("../../../assets/img/home/SVG/SVG11"));
const SVG12_1 = __importDefault(require("../../../assets/img/home/SVG/SVG12"));
const Support_1 = __importDefault(require("../../../assets/img/home/SVG/Support"));
const popularItem = [
    {
        img: "popularItem1.jpg",
        title: "BIKE / RICKSHAW",
        prise: 10,
        conditions: {
            condition1: {
                img: <SVG1_1.default />,
                text: "Your bike for a day"
            },
            condition2: {
                img: <SVG2_1.default />,
                text: "City App",
            },
            condition3: {
                img: <SVG3_1.default />,
                text: "Discount on Rickshaw",
            },
            condition4: {
                img: <Support_1.default />,
                text: "Guaranteed Support",
            },
        },
    },
    {
        img: "popularItem2.jpg",
        title: "BIKE TOURS",
        prise: 30,
        conditions: {
            condition1: {
                img: <SVG4_1.default />,
                text: "A Mountain Bike Included"
            },
            condition2: {
                img: <SVG5_1.default />,
                text: "A Guide For You"
            },
            condition3: {
                img: <SVG6_1.default />,
                text: "Bottle of water"
            },
            condition4: {
                img: <Support_1.default />,
                text: "Guaranteed Support"
            },
        },
    },
    {
        img: "popularItem3.jpg",
        title: "BUS TRIPS",
        prise: 45,
        conditions: {
            condition1: {
                img: <SVG7_1.default />,
                text: "Park ticket"
            },
            condition2: {
                img: <SVG8_1.default />,
                text: "Return bus"
            },
            condition3: {
                img: <SVG9_1.default />,
                text: "Companion"
            },
            condition4: {
                img: <Support_1.default />,
                text: "Guaranteed Support"
            },
        },
    },
    {
        img: "popularItem4.jpg",
        title: "TRANSFER",
        prise: 10,
        conditions: {
            condition1: {
                img: <SVG10_1.default />,
                text: "Personal Driver"
            },
            condition2: {
                img: <SVG11_1.default />,
                text: "Wherever You Want"
            },
            condition3: {
                img: <SVG12_1.default />,
                text: "At the best price"
            },
            condition4: {
                img: <Support_1.default />,
                text: "Guaranteed Support"
            },
        },
    },
];
const Popular = () => {
    return (<div className="popular block">
            <div className="wrapper">
                <div className="popular__block">
                    <h1 className="popular__title title">The Most Popular Packages</h1>

                    <ul className="popular__items flexBetween">
                        {popularItem.map(item => <li key={item.title} className="popular__item">
                                <img src={require("../../../assets/img/home/" + item.img)} alt={item.title}/>

                                <div className="popular__itemBlock">
                                    <h2 className="popular__itemTitle subtitle">{item.title}</h2>
                                    <h2 className="coloredText price">{item.prise}</h2>
                                    <div className="conditions">
                                        <div className="conditionItem flex">
                                            {item.conditions.condition1.img}
                                            <p className="text">{item.conditions.condition1.text}</p>
                                        </div>

                                        <div className="conditionItem flex">
                                            {item.conditions.condition2.img}
                                            <p className="text">{item.conditions.condition2.text}</p>
                                        </div>

                                        <div className="conditionItem flex">
                                            {item.conditions.condition3.img}
                                            <p className="text">{item.conditions.condition3.text}</p>
                                        </div>

                                        <div className="conditionItem flex">
                                            {item.conditions.condition4.img}
                                            <p className="text">{item.conditions.condition4.text}</p>
                                        </div>
                                    </div>

                                    <button className="conditions__button button">Book Now</button>
                                </div>

                            </li>)}
                    </ul>
                </div>
            </div>
        </div>);
};
exports.default = Popular;
