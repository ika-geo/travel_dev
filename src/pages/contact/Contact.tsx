import ContactMain from "./components/ContactMain";
import ContactMap from "./components/ContactMap";

import "../../assets/style/contact.css"


const Contact = () => {
    return (
        <div className="contact">
            <ContactMain/>
            <ContactMap/>
        </div>
    );
};

export default Contact;