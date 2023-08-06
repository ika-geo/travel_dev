"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HeaderBottom_1 = __importDefault(require("./components/HeaderBottom"));
const HomeTours_1 = __importDefault(require("./components/HomeTours"));
const BestCompany_1 = __importDefault(require("./components/BestCompany"));
const GetOffer_1 = __importDefault(require("./components/GetOffer"));
const Popular_1 = __importDefault(require("./components/Popular"));
const BookBike_1 = __importDefault(require("../../components/bookBike/BookBike"));
require("../../assets/style/home.css");
const Home = () => {
    return (<div className="home">
            <HeaderBottom_1.default />
            <HomeTours_1.default />
            <BestCompany_1.default />
            <GetOffer_1.default />
            <Popular_1.default />
            <BookBike_1.default />
        </div>);
};
exports.default = Home;
