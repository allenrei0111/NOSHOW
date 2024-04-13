import React, { useState, useEffect } from 'react';

const ProfileTab = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        // Fetch user profile data from backend
        const response = await fetch('http://localhost:4000/api/profile', {
          method: 'GET',
          headers: {
            'auth-token': localStorage.getItem('token') 
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }
        const data = await response.json();
        setProfileData(data);
        setName(data.name);
        setEmail(data.email);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token') 
        },
        body: JSON.stringify({ name, email })
      });
      if (!response.ok) {
        throw new Error('Failed to update profile');
      }
      // Update profileData with the new name and email
      setProfileData({ ...profileData, name, email });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      setError(error.message);
    }
  };

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!profileData) {
    return <p>No profile data available</p>;
  }

  return (
    <div>
      <h2>Your Profile</h2>
      {!isEditing ? (
        <>
          <p>Name: {profileData.name}</p>
          <p>Email: {profileData.email}</p>
          <button onClick={handleEdit}>Edit</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      )}
    </div>
  );
};

export default ProfileTab;
