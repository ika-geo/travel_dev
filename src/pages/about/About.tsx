import AboutTop from "./components/AboutTop";

import "../../assets/style/style.css"
import "../../assets/style/about.css"
import OfferBest from "./components/OfferBest";
import Advantages from "./components/Advantages";


const About = () => {
    return (
        <div className="about">
            <AboutTop/>
            <OfferBest/>
            <Advantages/>
        </div>
    );
};

export default About;