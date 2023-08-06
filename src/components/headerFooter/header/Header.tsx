import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import Logo from "../../logo/Logo";
import HeaderMenu from "./HeaderMenu";
import Login from "./Login";

import "./header.css"



const Header = () => {

    //scroll to top after link
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);





    const [mobileActive, setMobileActive] = useState(false)
    function toggleActive():void{
        setMobileActive(mobileActive=>!mobileActive)
    }

    return (
        <header className="header">

            <div className="burgerMenu" onClick={toggleActive}>
                <div className={"burgerStick" + (mobileActive?" active":"")}></div>
            </div>

            <div className="wrapper">
                <div className="header__block flex">
                    <Logo/>
                    <div className={"header__right flexBetween" + (mobileActive?" active":"")}>
                        <HeaderMenu
                            onClickHandle={toggleActive}
                        />
                        <Login/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;