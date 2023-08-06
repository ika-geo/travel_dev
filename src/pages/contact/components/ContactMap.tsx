

const ContactMap = () => {
    return (
        <div className="contactMap">
            <iframe
                title="mainMap"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.6960258001427!2d10.500718015503853!3d43.841400379115235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d5838a16d74ecb%3A0x975f20ba2efb457e!2zUC56YSBOYXBvbGVvbmUsIDU1MTAwIEx1Y2NhIExVLCDQmNGC0LDQu9C40Y8!5e0!3m2!1sru!2sru!4v1677873775134!5m2!1sru!2sru"
                style={{border:0}} allowFullScreen={true} loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default ContactMap;