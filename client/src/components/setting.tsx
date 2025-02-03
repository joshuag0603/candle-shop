import React, { useState } from 'react';
import { UserLogin } from "../interface/UserLogin.tsx";
import stylesheet from "../stylesheets/settings.css";

interface UserSettingProps {
    user: UserLogin;
    onSave: (updatedSettings: UserLogin) => void;
}

const Setting: React.FC<UserSettingProps> = ({ user, onSave }) => {
    const [settings, setSettings] = useState(user);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setSettings(prevSettings => ({
            ...prevSettings,
            [name]: value
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSave(settings);
    };

    return (
        <div>
            <h2>User Settings</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={settings.email || ""}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={settings.address || ""}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={settings.password || ""}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Profile Image URL:</label>
                    <input
                        type="text"
                        name="profileImg"
                        value={settings.profileImg || ""}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default Setting;
