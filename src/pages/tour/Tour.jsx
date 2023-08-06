"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Info_1 = __importDefault(require("./components/Info"));
const Description_1 = __importDefault(require("./components/Description"));
const Gallery_1 = __importDefault(require("./components/Gallery"));
require("../../assets/style/tour.css");
const Tour = ({ item }) => {
    return (<div className="tour block">
            <div className="wrapper">
                <div className="tour__block">
                    <div className="tour__infoBlock grid2 block">
                        <Gallery_1.default img={item.img}/>
                        <Info_1.default item={item}/>
                    </div>
                    <Description_1.default text={item.text}/>
                </div>
            </div>
        </div>);
};
exports.default = Tour;
