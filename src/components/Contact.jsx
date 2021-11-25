import React from "react";
import Male from "./assets/img/male.png";
import Female from "./assets/img/female.png";
import NoGender from "./assets/img/no-gender.png";

const Contact = ({contact}) => {
    return(
        <div className="container_contact">
            <div>
                <span className="contact_name">{contact.firstName}</span>
                <span className="contact_surname">{contact.lastName}</span>
                <img className="contact_gender" src={contact.gender === "male" ? Male : contact.gender === "female" ? Female : NoGender} alt="gender" />
            </div>
            <div className="contact_phone">{contact.phone}</div>
        </div>
    );
}

export default Contact;