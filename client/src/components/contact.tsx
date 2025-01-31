import React from 'react';
import { contactInfo } from "../interface/contactInfo";

interface ContactProps {
    contact: contactInfo;
}

const Contact: React.FC<ContactProps> = ({ contact }) => {
    return (
        <div>
            <h2>Contact Information</h2>
            <div className="mb-3">
                <label>Email:</label>
                <p>{contact.email ? contact.email : "No email available"}</p>
            </div>
            <div className="mb-3">
                <label>Phone Number:</label>
                <p>{contact.phoneNumber ? contact.phoneNumber : "No phone number available"}</p>
            </div>
        </div>
    );
};

export default Contact;
