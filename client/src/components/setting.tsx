import React, {useState} from 'react';

import { UserLogin } from "../interface/UserLogin";


interface UserSettingProps {
    user: UserLogin;
    onSave: (updatedSettings: UserLogin) => void;
}

const Setting: React.FC<UserSettingProps> = ({ user, onSave }) => {
    const [settings, setSettings] = useState<UserLogin>(user);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSettings((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(settings);
    };

    return (
        <div>
            <h2>User Settings</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={settings.username}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={settings.email}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={settings.address}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={settings.password}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label>Profile Image URL:</label>
                    <input
                        type="text"
                        name="profileImg"
                        value={settings.profileImg}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save Changes</button>
            </form>
        </div>
    );
};

export default Setting;