import {Link} from "react-router-dom";
import {MouseEventHandler} from "react";

interface OnClickHandle{
    onClickHandle:MouseEventHandler<HTMLAnchorElement>
}


const HeaderMenu = ({onClickHandle}:OnClickHandle) => {
    return (
        <>
            <nav>
                <ul className="menuItems flex">
                    <li><Link onClick={onClickHandle} to="/">Home</Link></li>
                    <li><Link onClick={onClickHandle} to="/about">About Us</Link></li>
                    <li><Link onClick={onClickHandle} to="/tours">Tour Packages</Link></li>
                    <li><Link onClick={onClickHandle} to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </>
    );
};







export default HeaderMenu;