import React, { useState, useEffect, useContext } from 'react';
import './Profile.css';
import FavoriteItems from '../Components/AddToFavorurites/FavoriteItems'; // Assuming FavoriteItems.jsx is in the same directory

const Profile = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [savedProfile, setSavedProfile] = useState(null);
  const [editMode, setEditMode] = useState(false); // State variable for edit mode

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
      address: address,
      profilePicture: profilePicture,
    };
    setSavedProfile(profile);
    setEditMode(false); // After saving, switch off edit mode
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setProfilePicture(reader.result);
    };
  };

  const handleEditField = (field, currentValue) => {
    const newValue = prompt(`Enter new ${field}:`, currentValue);
    if (newValue !== null) {
      switch (field) {
        case 'name':
          setName(newValue);
          break;
        case 'gender':
          setGender(newValue);
          break;
        case 'address':
          setAddress(newValue);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="profile-container">
      {!editMode && ( // Render edit button only if not in edit mode
        <button className="edit-button" onClick={() => setEditMode(true)}>
          Edit
        </button>
      )}

      {!editMode ? ( // Render profile display if not in edit mode
        <>
          {savedProfile && (
            <div className="profile-info">
              <h2>Profile:</h2>
              {savedProfile.profilePicture && (
                <img src={savedProfile.profilePicture} alt="Profile" />
              )}
              <p>Name: {savedProfile.name}</p>
              <p>Gender: {savedProfile.gender}</p>
              <p>Address: {savedProfile.address}</p>
            </div>
          )}
          <FavoriteItems /> {/* Render FavoriteItems component */}
        </>
      ) : (
        // Render edit fields if in edit mode
        <div>
          <div className="label" onClick={() => handleEditField('name', name)}>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="label" onClick={() => handleEditField('gender', gender)}>
            <label>Gender:</label>
            <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
          </div>
          <div className="label" onClick={() => handleEditField('address', address)}>
            <label>Address:</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="label">
            <label>Profile Picture:</label>
            <input className="file-input" type="file" accept="image/*" onChange={handleProfilePictureChange} />
          </div>
          <button className="save-button" onClick={handleSaveProfile}>Save</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
