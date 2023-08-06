"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TourItem_1 = __importDefault(require("../../../components/tourItem/TourItem"));
const API_1 = require("../../../FakeApi/API");
const homeItems = [];
for (let i = 0; i < 4; i++) {
    homeItems.push(API_1.someApi[i]);
}
const HomeTours = () => {
    return (<div className="homeTours block">
            <div className="wrapper">
                <div className="homeTours__block">
                    <div className="homeTours__title">
                        <h1 className="title">Explore Our Popular Destinantions </h1>
                    </div>
                    <div className="homeTours__items grid4">
                        {homeItems.map(item => <TourItem_1.default key={item.title} title={item.title} img={item.img[0]} price={item.price} day={item.day} persons={item.persons} text={item.text}/>)}
                    </div>
                </div>
            </div>
        </div>);
};
exports.default = HomeTours;
