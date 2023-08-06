"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const Logo_1 = __importDefault(require("../../logo/Logo"));
const HeaderMenu_1 = __importDefault(require("./HeaderMenu"));
const Login_1 = __importDefault(require("./Login"));
require("./header.css");
const Header = () => {
    //scroll to top after link
    const { pathname } = (0, react_router_dom_1.useLocation)();
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    const [mobileActive, setMobileActive] = (0, react_1.useState)(false);
    function toggleActive() {
        setMobileActive(mobileActive => !mobileActive);
    }
    return (<header className="header">

            <div className="burgerMenu" onClick={toggleActive}>
                <div className={"burgerStick" + (mobileActive ? " active" : "")}></div>
            </div>

            <div className="wrapper">
                <div className="header__block flex">
                    <Logo_1.default />
                    <div className={"header__right flexBetween" + (mobileActive ? " active" : "")}>
                        <HeaderMenu_1.default onClickHandle={toggleActive}/>
                        <Login_1.default />
                    </div>
                </div>
            </div>
        </header>);
};
exports.default = Header;
