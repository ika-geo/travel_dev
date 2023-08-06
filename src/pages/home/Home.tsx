import HeaderBottom from "./components/HeaderBottom";
import HomeTours from "./components/HomeTours";
import BestCompany from "./components/BestCompany";
import GetOffer from "./components/GetOffer";
import Popular from "./components/Popular";
import BookBike from "../../components/bookBike/BookBike";


import "../../assets/style/home.css"


const Home = () => {
    return (
        <div className="home">
            <HeaderBottom/>
            <HomeTours/>
            <BestCompany/>
            <GetOffer/>
            <Popular/>
            <BookBike/>
        </div>
    );
};

export default Home;