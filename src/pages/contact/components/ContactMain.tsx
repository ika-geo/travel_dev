import ContactInfo from "./contactMain/ContactInfo";
import ContactForm from "./contactMain/ContactForm";


const ContactMain = () => {
    return (
        <div className="contact__main coloredBG">
            <div className="wrapper">
                <div className="contact__mainBlock grid2">
                    <ContactInfo/>
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
};

export default ContactMain;