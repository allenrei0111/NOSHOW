import React, { useState } from 'react';
import { useProfile } from './ProfileContext'; // Assuming you named your context file as ProfileContext.js

const Profile = () => {
  const { profileData, saveProfileData } = useProfile();
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSaveProfile = () => {
    const profile = {
      name: name,
      gender: gender,
      bio: bio,
      profilePicture: profilePicture
    };
    saveProfileData(profile);
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
      {/* Your profile form JSX */}
    </div>
  );
};

export default Profile;
