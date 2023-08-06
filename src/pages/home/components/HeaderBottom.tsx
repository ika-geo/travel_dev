import Persons from "../../../assets/img/home/homeBottomSVG/Persons";
import Date from "../../../assets/img/home/homeBottomSVG/Date";
import Tour from "../../../assets/img/home/homeBottomSVG/Tour";
import Transportation from "../../../assets/img/home/homeBottomSVG/Transportation";


const HeaderBottom = () => {
    // @ts-ignore
    // @ts-ignore
    return (
        <div className="headerBottom">
            <div className="wrapper">
                <div className="headerBottomBlock">

                    <div className="headerBottom__text">
                        <h1 className="headerBottom__title handwritingTitle">Enjoy in the best way!</h1>
                        <p className="headerBottom__text text">Enjoy our services for your trip anytime</p>
                    </div>

                    <form className="flexBetween" action="">

                        <div className="inputBlock">
                            <label htmlFor="HeaderName" className="flex">
                                <Persons/>
                                <p className="text">Number of people</p>
                            </label>
                            <input id="HeaderName" name="HeaderName" type="number" placeholder="Choose number"/>
                        </div>

                        <div className="inputBlock">
                            <label htmlFor="HeaderDate" className="flex">
                                <Date/>
                                <p className="text">Date</p>
                            </label>
                            <input id="HeaderDate" name="HeaderDate" type="date"/>
                        </div>

                        <div className="inputBlock">
                            <label htmlFor="HeaderTour" className="flex">
                                <Tour/>
                                <p className="text">Tour</p>
                            </label>

                            <select id="HeaderTour" name="HeaderTour">
                                <option defaultChecked={true} disabled={true} value="Select Tour">Select Tour</option>
                                <option value="Lucca Bike Tour">Lucca Bike Tour</option>
                                <option value="Book a bike ">Book a bike </option>
                                <option value="Tour in the outside of Lucca">Tour in the outside of Lucca</option>
                                <option value="Wine Tasting in Tuscany">Wine Tasting in Tuscany</option>
                                <option value="Cinque Terre Tour">Cinque Terre Tour</option>
                            </select>
                        </div>

                        <div className="inputBlock">
                            <label htmlFor="HeaderTransportation" className="flex">
                                <Transportation/>
                                <p className="text">Transportation</p>
                            </label>
                            <select id="HeaderTransportation" name="HeaderTransportation">
                                <option defaultChecked={true} disabled={true} value="Select Transportation">Select Transportation</option>
                                <option value="Minivan and Bus">Minivan and Bus</option>
                                <option value="Transfers & NCC">Transfers & NCC</option>
                                <option value="Luxury Experience">Luxury Experience</option>
                            </select>
                        </div>

                        <div className="inputBlock">
                            <input className="button hoverDisabled" type="submit" value="Search"/>
                        </div>



                    </form>
                </div>
            </div>
        </div>
    );
};

export default HeaderBottom;