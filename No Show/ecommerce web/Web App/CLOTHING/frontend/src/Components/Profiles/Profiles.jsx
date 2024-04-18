import React from "react";
import { Link } from "react-router-dom";
import "./Profiles.css"; // Link to the CSS file containing the provided styles

const Profiles = () => {
    const handleLogout = () => {
        localStorage.removeItem('auth-token');
        alert('Successfully logged out');
        // Redirect to homepage
        window.location.replace("/");
    };

    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('auth-token') !== null;

    return (
        <div className="profiles"> 
            <ul className="list-none profile-list">
                <li>
                    <Link to="/profile" className="link-style">
                        <span className="icon">
                            <svg viewBox="0 0 24 24" width="20" height="20">
                                {/* Add your profile icon SVG here */}
                            </svg>
                        </span>
                        <span className="text">Profile</span>
                    </Link>
                </li>
                <li>
                    <Link to="/favorite" className="link-style">
                        <span className="icon">
                            <svg viewBox="0 0 24 24" width="20" height="20">
                                {/* Add your favorites icon SVG here */}
                            </svg>
                        </span>
                        <span className="text">Favorites</span>
                    </Link>
                </li>
                <li>
                    {isLoggedIn ? (
                        <button onClick={handleLogout} className="logout-button link-style">
                            <span className="icon">
                                <svg viewBox="0 0 24 24" width="20" height="20">
                                    {/* Add your logout icon SVG here */}
                                </svg>
                            </span>
                            <span className="text">Logout</span>
                        </button>
                    ) : (
                        <Link to="/login" className="link-style">
                            <span className="icon">
                                <svg viewBox="0 0 24 24" width="20" height="20">
                                    {/* Add your login icon SVG here */}
                                </svg>
                            </span>
                            <span className="text">Login</span>
                        </Link>
                    )}
                </li>
            </ul>
        </div>
    );
}

export default Profiles;
