import React, {ReactElement} from "react";

import SVG1 from "../../../assets/img/home/SVG/SVG1";
import SVG2 from "../../../assets/img/home/SVG/SVG2";
import SVG3 from "../../../assets/img/home/SVG/SVG3";
import SVG4 from "../../../assets/img/home/SVG/SVG4";
import SVG5 from "../../../assets/img/home/SVG/SVG5";
import SVG6 from "../../../assets/img/home/SVG/SVG6";
import SVG7 from "../../../assets/img/home/SVG/SVG7";
import SVG8 from "../../../assets/img/home/SVG/SVG8";
import SVG9 from "../../../assets/img/home/SVG/SVG9";
import SVG10 from "../../../assets/img/home/SVG/SVG10";
import SVG11 from "../../../assets/img/home/SVG/SVG11";
import SVG12 from "../../../assets/img/home/SVG/SVG12";
import Support from "../../../assets/img/home/SVG/Support";


interface PopularItem{
    img: string,
    title: string,
    prise: number,
    conditions: {
        condition1: {
            img: ReactElement,
            text: string
        }

        condition2: {
            img: ReactElement,
            text: string
        }

        condition3: {
            img: ReactElement,
            text: string
        }

        condition4: {
            img: ReactElement,
            text: string
        }
    }
}


const popularItem: PopularItem[] = [
    {
        img: "popularItem1.jpg",
        title: "BIKE / RICKSHAW",
        prise: 10,
        conditions: {
            condition1: {
                img: <SVG1/>,
                text: "Your bike for a day"
            },

            condition2: {
                img: <SVG2/>,
                text: "City App",
            },

            condition3: {
                img: <SVG3/>,
                text: "Discount on Rickshaw",
            },

            condition4: {
                img: <Support/>,
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
                img: <SVG4/>,
                text: "A Mountain Bike Included"
            },

            condition2: {
                img: <SVG5/>,
                text: "A Guide For You"
            },

            condition3: {
                img: <SVG6/>,
                text: "Bottle of water"
            },

            condition4: {
                img: <Support/>,
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
                img: <SVG7/>,
                text: "Park ticket"
            },

            condition2: {
                img: <SVG8/>,
                text: "Return bus"
            },

            condition3: {
                img: <SVG9/>,
                text: "Companion"
            },

            condition4: {
                img: <Support/>,
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
                img: <SVG10/>,
                text: "Personal Driver"
            },

            condition2: {
                img: <SVG11/>,
                text: "Wherever You Want"
            },

            condition3: {
                img: <SVG12/>,
                text: "At the best price"
            },

            condition4: {
                img: <Support/>,
                text: "Guaranteed Support"
            },
        },
    },
]


const Popular = () => {
    return (
        <div className="popular block">
            <div className="wrapper">
                <div className="popular__block">
                    <h1 className="popular__title title">The Most Popular Packages</h1>

                    <ul className="popular__items flexBetween">
                        {popularItem.map(item =>
                            <li key={item.title} className="popular__item">
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

                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Popular;