import TourItem from "../../../components/tourItem/TourItem";
import {someApi} from "../../../FakeApi/API";

const homeItems:any[] = []

for (let i = 0; i < 4; i++) {
    homeItems.push(someApi[i])
}

const HomeTours = () => {
    return (
        <div className="homeTours block">
            <div className="wrapper">
                <div className="homeTours__block">
                    <div className="homeTours__title">
                        <h1 className="title">Explore Our Popular Destinantions </h1>
                    </div>
                    <div className="homeTours__items grid4">
                        {homeItems.map(item=>
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

export default HomeTours;