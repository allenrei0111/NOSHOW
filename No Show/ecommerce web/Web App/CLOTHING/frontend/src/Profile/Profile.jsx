import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [savedProfile, setSavedProfile] = useState(null);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingGender, setIsEditingGender] = useState(false);
  const [isEditingBio, setIsEditingBio] = useState(false);

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
        {isEditingName ? (
          <input
            className="input-field"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setIsEditingName(false)}
          />
        ) : (
          <span onClick={() => setIsEditingName(true)}>{name || "Click to edit"}</span>
        )}
      </div>
      <div className="label">
        <label>Gender:</label>
        {isEditingGender ? (
          <input
            className="input-field"
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            onBlur={() => setIsEditingGender(false)}
          />
        ) : (
          <span onClick={() => setIsEditingGender(true)}>{gender || "Click to edit"}</span>
        )}
      </div>
      <div className="label">
        <label>Bio:</label>
        {isEditingBio ? (
          <textarea
            className="textarea-field"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            onBlur={() => setIsEditingBio(false)}
          />
        ) : (
          <span onClick={() => setIsEditingBio(true)}>{bio || "Click to edit"}</span>
        )}
      </div>