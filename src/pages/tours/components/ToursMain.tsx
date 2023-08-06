import React from 'react';

import {someApi} from "../../../FakeApi/API";
import TourItem from "../../../components/tourItem/TourItem";


const ToursMain = () => {
    return (
        <div style={{marginTop:"110px"}} className="toursItems block">
            <div className="wrapper">
                <div className="toursItems">
                    <h1 className="title">Tour Packages</h1>
                    <div className="tours__items grid4">
                        {someApi.map(item=>
                            <TourItem
                                key={item.title}
                                title={item.title}
                                img={item.img[0]}
                                price={item.price}
                                day={item.day}
                                persons={item.persons}
                                text={item.text}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToursMain;