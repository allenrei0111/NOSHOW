import React from "react";
import "./Profiles.css";
import "../AddToFavorurites/FavoriteItems.jsx"
import "../../Pages/LoginSignup.jsx"
import { Link } from "react-router-dom";

const Profiles = () => {
    return (
        <div className="flex flex-col profiles"> 
            <ul className="flex-col gap-4">
                <li>Profile</li>
                <li>Favourites</li>
                <li><Link to="login-signup">Login</Link></li>
            </ul>
        </div>
    )
        

}

export default Profiles;