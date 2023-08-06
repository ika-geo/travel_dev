import {Link} from "react-router-dom";


const AboutTop = () => {
    return (
        <div className="aboutTop block">
            <div className="wrapper">
                <div className="aboutTop__block">
                    <h1 className="aboutTop__title handwritingTitle">Our team cares about your full relax</h1>
                    <p className="aboutTop__text">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                    <Link to="/" className="aboutTop__button button">View our Tour Packages</Link>
                </div>
            </div>
        </div>
    );
};

export default AboutTop;