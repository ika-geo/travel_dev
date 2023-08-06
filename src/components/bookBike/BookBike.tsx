import "./bookBike.css"

const BookBike = () => {
    return (
        <div className="bookBike coloredBG">
            <div className="wrapper">
                <div className="bookBike__block grid2">

                    <div className="bookBike__form">
                        <h1 className="title">Book Now Bike</h1>

                        <form>
                            <div className="inputs grid2">

                                <div>
                                    <label htmlFor="Name">Name</label>
                                    <input required={true} id="Name" name="name" type="text" placeholder="Your Name"/>
                                </div>

                                <div>
                                    <label htmlFor="Email">Email</label>
                                    <input required={true} id="Email" name="email" type="email" placeholder="Your Email"/>
                                </div>

                                <div>
                                    <label htmlFor="Phone">Phone</label>
                                    <input required={true} id="Phone" name="phone" type="number" placeholder="Your Phone"/>
                                </div>

                                <div>
                                    <label htmlFor="Date">Date</label>
                                    <input required={true} id="Date" name="date" type="text" placeholder="Select date"
                                           onFocus={(e)=>e.target.type="date"}
                                           onBlur={(e)=>e.target.type="text"}
                                    />
                                </div>

                            </div>

                            <input className="button" type="submit" value="Book Now"/>
                        </form>
                    </div>


                    <div className="bookBike__img">
                        <img src={require("../../assets/img/home/bike.png")} alt="bike"/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookBike;