import React from 'react'
import { useLocation } from 'react-router-dom'

const UserProfile = () => {
  const { state } = useLocation(); // Access the state passed via the Link component
  console.log(state);

  return (
    <>
      {state ? (
        <div className='profile-container'>
          <h1 className='profile-title'>User Profile</h1>
          <p className='profile-item'><span className='profile-level'>Name:</span> {state.name}</p>
          <p className='profile-item'><span className='profile-level'>Email:</span> {state.email}</p>
          <p className='profile-item'><span className='profile-level'>Country:</span> {state.country}</p>
        </div>
      ) : (
        <p>No Profile Exists</p>
      )}
    </>
  );
}

export default UserProfile;
