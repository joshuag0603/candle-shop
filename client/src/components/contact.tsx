import React from 'react';
import { contactInfo } from "../interface/contactInfo.tsx";
import "../stylesheets/contact.css";

interface ContactProps {
    contact: contactInfo;
}

const Contact: React.FC<ContactProps> = ({ contact }) => {
    return (
        <div>
            <h2>Contact Information</h2>
            <div className="email"> 
                <label>Email:</label> 
                <p>{contact.email || "No email available"}</p>
            </div>
            <div className="phoneNumber">
                <label>Phone Number:</label>
                <p>{contact.phoneNumber || "No phone number available"}</p>
            </div>
        </div>
    );
};

export default Contact;