import React, { useState, useEffect } from 'react';
import './Profile.css';
const Profile = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [savedProfile, setSavedProfile] = useState(null);

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

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setProfilePicture(reader.result);
    };
  };

  return (
    <div className="profile-container">
      <div className="label">
        <label>Name:</label>
        <input className="input-field" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="label">
        <label>Gender:</label>
        <input className="input-field" type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
      </div>
      <div className="label">
        <label>Bio:</label>
        <textarea className="textarea-field" value={bio} onChange={(e) => setBio(e.target.value)} />
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
    </div>
  );
};

export default Profile;
