"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const API_1 = require("../../../FakeApi/API");
const TourItem_1 = __importDefault(require("../../../components/tourItem/TourItem"));
const ToursMain = () => {
    return (<div style={{ marginTop: "110px" }} className="toursItems block">
            <div className="wrapper">
                <div className="toursItems">
                    <h1 className="title">Tour Packages</h1>
                    <div className="tours__items grid4">
                        {API_1.someApi.map(item => <TourItem_1.default key={item.title} title={item.title} img={item.img[0]} price={item.price} day={item.day} persons={item.persons} text={item.text}/>)}
                    </div>
                </div>
            </div>
        </div>);
};
exports.default = ToursMain;
