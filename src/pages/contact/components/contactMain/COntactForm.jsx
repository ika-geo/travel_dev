"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContactForm = () => {
    return (<form action="">

            <label className="text" htmlFor="Name">Your name</label>
            <input required={true} id="Name" name="name" type="text" placeholder="Enter your name"/>

            <label className="text" htmlFor="Email">Your email</label>
            <input required={true} id="Email" name="email" type="email" placeholder="Enter your email address"/>

            <label className="text" htmlFor="text">Text</label>
            <textarea required={true} name="text" id="text" placeholder="Enter your Message"></textarea>

            <input className="button" type="submit" value="Send Message"/>

        </form>);
};
exports.default = ContactForm;
