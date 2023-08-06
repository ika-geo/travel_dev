import AdvantagesSVG1 from "../../../assets/img/about/AdvantagesSVG1";
import AdvantagesSVG2 from "../../../assets/img/about/AdvantagesSVG2";
import AdvantagesSVG3 from "../../../assets/img/about/AdvantagesSVG3";
import AdvantagesSVG4 from "../../../assets/img/about/AdvantagesSVG4";
import {ReactElement} from "react";


interface AdvantagesInterface{
    img: ReactElement,
    title: string
}

const advantages:AdvantagesInterface[] = [
    {
        img: <AdvantagesSVG1/>,
        title: "Complete Packages For All Your Wishes"
    },

    {
        img: <AdvantagesSVG2/>,
        title: "Over 30 Years Of Experience"
    },

    {
        img: <AdvantagesSVG3/>,
        title: "Expert Guides For You"
    },

    {
        img: <AdvantagesSVG4/>,
        title: "Guaranteed fun at the best price!"
    },
]


const Advantages = () => {
    return (
        <div className="advantages coloredBG block">
            <div className="wrapper">
                <div className="advantages__block grid4">
                    {advantages.map(item =>
                        <div key={item.title} className="advantages__item">
                            {item.img}
                            <h2 className="advantages__title subTitle">{item.title}</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Advantages;