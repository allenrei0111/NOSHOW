import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [bio, setBio] = useState('');
  const [savedProfile, setSavedProfile] = useState(null);

  const handleSaveProfile = () => {
    const profile = {
      name: name,
      gender: gender,
      bio: bio
    };
    setSavedProfile(profile);
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
      <button className="save-button" onClick={handleSaveProfile}>Save</button>

      {savedProfile && (
        <div className="profile-info">
          <h2>Profile:</h2>
          <p>Name: {savedProfile.name}</p>
          <p>Gender: {savedProfile.gender}</p>
          <p>Bio: {savedProfile.bio}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
