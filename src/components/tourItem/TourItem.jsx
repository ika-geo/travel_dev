"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CalendarIcon_1 = __importDefault(require("../../assets/img/home/CalendarIcon"));
const PersonIcon_1 = __importDefault(require("../../assets/img/home/PersonIcon"));
const react_router_dom_1 = require("react-router-dom");
require("./tourItem.css");
const TourItem = (props) => {
    return (<div key={props.title} className="homeTours__item">
            <img className="full" src={require("../../FakeApi/images/" + props.img)} alt={props.title}/>
            <react_router_dom_1.Link to={"../" + props.title} className="subTitle">{props.title}</react_router_dom_1.Link>

            <div className="tourPrice">from
                <span className="coloredText">{props.price}$</span>
            </div>

            <div className="date__persons flexBetween">
                <div className="date flex">
                    <CalendarIcon_1.default />
                    <p className="coloredText2">{props.day}</p>
                </div>
                <div className="persons flex">
                    <PersonIcon_1.default />
                    <p className="coloredText2">
                        {typeof props.persons === "object" ? props.persons[0] + "-" + props.persons[1] : typeof props.persons === "number" ? props.persons : ""}
                    </p>
                </div>
            </div>

            <p className="text">{props.text}</p>

        </div>);
};
exports.default = TourItem;
