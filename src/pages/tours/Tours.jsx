"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ToursMain_1 = __importDefault(require("./components/ToursMain"));
const BookBike_1 = __importDefault(require("../../components/bookBike/BookBike"));
const Tours = () => {
    return (<div className="tours">
                <ToursMain_1.default />
                <BookBike_1.default />
            </div>);
};
exports.default = Tours;
