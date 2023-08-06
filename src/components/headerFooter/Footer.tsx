import "./footer.css"


const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="footer__block grid4">

                    <div className="footer__block">
                        <h2 className="footer__title">Services</h2>
                        <a href="#">Bike and Rickshaw rental</a>
                        <a href="#">Guided Tours of Lucca</a>
                        <a href="#">Guided Bike Tour of Lucca</a>
                        <a href="#">Trip In The Tuscan Hills</a>
                        <a href="#">Transportation With Luxury Cars</a>
                        <a href="#">Wine Tours By Bus With Guide</a>
                    </div>

                    <div className="footer__block">
                        <h2 className="footer__title">Home</h2>
                        <a href="#">Home</a>
                        <a href="#">About Us</a>
                        <a href="#">Tour Packages</a>
                    </div>

                    <div className="footer__block">
                        <h2 className="footer__title">Help</h2>
                        <a href="#">Terms of Use</a>
                        <a href="#">Provicy Policy</a>
                    </div>

                    <div className="footer__block">
                        <h2 className="footer__title">Contacts</h2>

                        <div className="flex">

                            <a href="https://www.google.com/maps/search/liberty+square/@41.694013,44.7986454,17z/data=!3m1!4b1" target="_blank">Some place, some address</a>
                        </div>

                        <div className="flex">

                            <a href="tel:+123456789">+123 456 789</a>
                        </div>

                        <div className="flex">

                            <a href="mailto:mail@mail">mail@mail</a>
                        </div>

                    </div>


                </div>

                <hr/>

                <p className="copyright">Copyright © 2022.  All rights reserved.</p>

            </div>
        </footer>
    );
};

export default Footer;