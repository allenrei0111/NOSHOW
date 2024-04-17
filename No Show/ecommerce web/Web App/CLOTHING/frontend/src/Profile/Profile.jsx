import React, { useState, useEffect } from 'react';
import './Profile.css';
import FavoriteItems from '../Components/AddToFavorurites/FavoriteItems';

const Profile = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState(null); // New state variable for cover photo
  const [savedProfile, setSavedProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const savedProfileData = localStorage.getItem('savedProfile');
    if (savedProfileData) {
      setSavedProfile(JSON.parse(savedProfileData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('savedProfile', JSON.stringify(savedProfile));
  }, [savedProfile]);

  const handleSaveProfile = () => {
    const profile = {
      name: name,
      gender: gender,
      address: address,
      profilePicture: profilePicture,
      coverPhoto: coverPhoto, 
    };
    setSavedProfile(profile);
    setEditMode(false);
    alert("Profile is updated!");
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setProfilePicture(reader.result);
    };
  };

  const handleCoverPhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setCoverPhoto(reader.result);
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
  <div className="profile-info">
    {savedProfile && (
      <div className="profile-photo-container">
        {savedProfile.coverPhoto && (
          <img className="cover-photo" src={savedProfile.coverPhoto} alt="Cover" />
        )}
        {savedProfile.profilePicture && (
          <img className="profile-picture" src={savedProfile.profilePicture} alt="Profile" />
        )}
      </div>
    )}
        <div className="profile-right">
          {!editMode && (
            <button className="edit-button" onClick={() => setEditMode(true)}>
              Edit
            </button>
          )}
          {!editMode ? (
            <>
              <h2>Profile:</h2>
              <p>Name: {savedProfile && savedProfile.name}</p>
              <p>Gender: {savedProfile && savedProfile.gender}</p>
              <p>Address: {savedProfile && savedProfile.address}</p>
            </>
          ) : (
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
              <div className="label">
                <label>Cover Photo:</label>
                <input className="file-input" type="file" accept="image/*" onChange={handleCoverPhotoChange} />
              </div>
              <button className="save-button" onClick={handleSaveProfile}>Save</button>
            </div>
          )}
        </div>
      </div>
      <div className="favorite-section">
        <h2>Favorite Items</h2>
        <FavoriteItems />
      </div>
    </div>
  );
};

export default Profile;
