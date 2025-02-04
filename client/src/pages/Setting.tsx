import React, { useState } from "react";
import UserSetting from "../components/setting.js";
import NavBar from "../components/navbar.js";
import Contact from "../components/contact.js";
import { UserLogin } from "../interface/UserLogin.js";
import { contactInfo } from "../interface/contactInfo.js";

const Setting: React.FC = () => {
    const [user, setUser] = useState<UserLogin>({
        id: 1,
        email: "user@example.com",
        address: "123 Main St",
        password: "password123",
        profileImg: "https://via.placeholder.com/150",
    });

    const [contact] = useState<contactInfo>({
        email: "user@example.com",
        phoneNumber: "123-456-7890",
    });

    const handleSave = (updatedUser: UserLogin) => {
        setUser(updatedUser);
    };

    return (
        <>
            <NavBar />
            <h2>Update Your Information</h2>
            <UserSetting user={user} onSave={handleSave} />
            <Contact contact={contact} />
            
        </>
    );
};

export default Setting;
