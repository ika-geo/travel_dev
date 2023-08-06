import Header from "./header/Header";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";


const HeaderFooter = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default HeaderFooter;