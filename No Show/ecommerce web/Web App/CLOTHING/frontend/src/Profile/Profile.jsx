import React, { useState, useEffect } from 'react';
import Popup from './Popup'; // Path to your Popup component
import './Profile.css';
const Profile = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [savedProfile, setSavedProfile] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState('');

  useEffect(() => {
    // Load saved profile from localStorage on component mount
    const savedProfileData = localStorage.getItem('savedProfile');
    if (savedProfileData) {
      setSavedProfile(JSON.parse(savedProfileData));
    }
  }, []);

  useEffect(() => {
    // Save profile to localStorage whenever it changes
    localStorage.setItem('savedProfile', JSON.stringify(savedProfile));
  }, [savedProfile]);

  const handleSaveProfile = () => {
    const profile = {
      name: name,
      gender: gender,
      bio: bio,
      profilePicture: profilePicture
    };
    setSavedProfile(profile);
  };

  const handlePopupSave = (value) => {
    switch (popupType) {
      case 'name':
        setName(value);
        break;
      case 'gender':
        setGender(value);
        break;
      case 'bio':
        setBio(value);
        break;
      default:
        break;
    }
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setProfilePicture(reader.result);
    };
  };

  const openPopup = (type) => {
    setPopupType(type);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="profile-container">
      <div className="label">
        <label>Name:</label>
        <button className="popup-trigger" onClick={() => openPopup('name')}>Edit</button>
        <span>{name}</span>
      </div>
      <div className="label">
        <label>Gender:</label>
        <button className="popup-trigger" onClick={() => openPopup('gender')}>Edit</button>
        <span>{gender}</span>
      </div>
      <div className="label">
        <label>Bio:</label>
        <button className="popup-trigger" onClick={() => openPopup('bio')}>Edit</button>
        <span>{bio}</span>
      </div>
      <div className="label">
        <label>Profile Picture:</label>
        <input className="file-input" type="file" accept="image/*" onChange={handleProfilePictureChange} />
      </div>
      <button className="save-button" onClick={handleSaveProfile}>Save</button>

      {savedProfile && (
        <div className="profile-info">
          <h2>Profile:</h2>
          <p>Name: {savedProfile.name}</p>
          <p>Gender: {savedProfile.gender}</p>
          <p>Bio: {savedProfile.bio}</p>
          {savedProfile.profilePicture && (
            <img src={savedProfile.profilePicture} alt="Profile" />
          )}
        </div>
      )}

      <Popup isOpen={popupOpen} onClose={closePopup} onSave={handlePopupSave} />
    </div>
  );
};

export default Profile;
