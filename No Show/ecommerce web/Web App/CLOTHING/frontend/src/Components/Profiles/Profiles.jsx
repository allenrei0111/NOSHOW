import React from "react";
import "./Profiles.css";
import "../AddToFavorurites/FavoriteItems.jsx"
import "../../Pages/LoginSignup.jsx"

const Profiles = () => {
    return (
        <div className="flex-col"> 
            <ul className="flex-col gap-4">
                <li>Profile</li>
                <li>Favourites</li>
                <li>Logout</li>
            </ul>
        </div>
    )
        

}

export default Profiles;