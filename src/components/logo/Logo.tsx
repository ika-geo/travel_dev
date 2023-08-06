import {Link} from "react-router-dom";
import "./logo.css"



const Logo = () => {
    return (
        <div className="logo">
            <Link to="/">
                <img src={require("../../assets/img/logo.png")} alt="logo"/>
                <h2 className="logoText">Tuscany</h2>
            </Link>
        </div>

    );
};

export default Logo;