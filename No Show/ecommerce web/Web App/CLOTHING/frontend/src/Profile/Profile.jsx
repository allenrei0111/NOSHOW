import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [school, setSchool] = useState('');
  const [address, setAddress] = useState('');
  const [savedProfile, setSavedProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
};
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
    profilePicture: profilePicture,
    school: school,
    address: address
  };
  setSavedProfile(profile);
  setIsEditing(false); // Hide the editing fields after saving
};

const handleProfilePictureChange = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setProfilePicture(reader.result);
  };
};
export default Profile;