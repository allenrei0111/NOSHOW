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