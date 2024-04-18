import React from "react";
import { Link } from "react-router-dom";

const Profiles = () => {

    const handleLogout = () => {
        localStorage.removeItem('auth-token');
        alert('Successfully logged out');
        // Redirect to homepage
        window.location.replace("/");
    };

    return (
        <div className="profiles"> 
            <ul className="list-none profile-list">
                <li><Link to="/profile" className="link-style">Profile</Link></li>
                <li><Link to="/favorite" className="link-style">Favourites</Link></li>
                <li><button onClick={handleLogout} className="link-style">Logout</button></li>
            </ul>
        </div>
    );
}

export default Profiles;
