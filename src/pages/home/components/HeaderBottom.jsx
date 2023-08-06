"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Persons_1 = __importDefault(require("../../../assets/img/home/homeBottomSVG/Persons"));
const Date_1 = __importDefault(require("../../../assets/img/home/homeBottomSVG/Date"));
const Tour_1 = __importDefault(require("../../../assets/img/home/homeBottomSVG/Tour"));
const Transportation_1 = __importDefault(require("../../../assets/img/home/homeBottomSVG/Transportation"));
const HeaderBottom = () => {
    // @ts-ignore
    // @ts-ignore
    return (<div className="headerBottom">
            <div className="wrapper">
                <div className="headerBottomBlock">

                    <div className="headerBottom__text">
                        <h1 className="headerBottom__title handwritingTitle">Enjoy in the best way!</h1>
                        <p className="headerBottom__text text">Enjoy our services for your trip anytime</p>
                    </div>

                    <form className="flexBetween" action="">

                        <div className="inputBlock">
                            <label htmlFor="HeaderName" className="flex">
                                <Persons_1.default />
                                <p className="text">Number of people</p>
                            </label>
                            <input id="HeaderName" name="HeaderName" type="number" placeholder="Choose number"/>
                        </div>

                        <div className="inputBlock">
                            <label htmlFor="HeaderDate" className="flex">
                                <Date_1.default />
                                <p className="text">Date</p>
                            </label>
                            <input id="HeaderDate" name="HeaderDate" type="date"/>
                        </div>

                        <div className="inputBlock">
                            <label htmlFor="HeaderTour" className="flex">
                                <Tour_1.default />
                                <p className="text">Tour</p>
                            </label>

                            <select id="HeaderTour" name="HeaderTour">
                                <option defaultChecked={true} disabled={true} value="Select Tour">Select Tour</option>
                                <option value="Lucca Bike Tour">Lucca Bike Tour</option>
                                <option value="Book a bike ">Book a bike </option>
                                <option value="Tour in the outside of Lucca">Tour in the outside of Lucca</option>
                                <option value="Wine Tasting in Tuscany">Wine Tasting in Tuscany</option>
                                <option value="Cinque Terre Tour">Cinque Terre Tour</option>
                            </select>
                        </div>

                        <div className="inputBlock">
                            <label htmlFor="HeaderTransportation" className="flex">
                                <Transportation_1.default />
                                <p className="text">Transportation</p>
                            </label>
                            <select id="HeaderTransportation" name="HeaderTransportation">
                                <option defaultChecked={true} disabled={true} value="Select Transportation">Select Transportation</option>
                                <option value="Minivan and Bus">Minivan and Bus</option>
                                <option value="Transfers & NCC">Transfers & NCC</option>
                                <option value="Luxury Experience">Luxury Experience</option>
                            </select>
                        </div>

                        <div className="inputBlock">
                            <input className="button hoverDisabled" type="submit" value="Search"/>
                        </div>



                    </form>
                </div>
            </div>
        </div>);
};
exports.default = HeaderBottom;
