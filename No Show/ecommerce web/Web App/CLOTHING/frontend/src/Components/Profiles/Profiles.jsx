import React from "react";
import "./Profiles.css";
import "../AddToFavorurites/FavoriteItems.jsx"
import "../../Pages/LoginSignup.jsx"
import { Link } from "react-router-dom";

const Profiles = () => {
    return (
        <div className="profiles"> 
            <ul className="list-none profile-list">
                <li><Link to="/profile" className="link-style">Profile</Link></li>
                <li><Link to="/favorite" className="link-style">Favourites</Link></li>
                <li><Link to="login-signup" className="link-style">Login</Link></li>
            </ul>
        </div>
    )
        

}

export default Profiles;