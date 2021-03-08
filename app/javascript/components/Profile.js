import React from 'react';
const Profile = ({ profile }) => {
  const { id, name, email, phone } = profile;
  return (
    <>
      <h1>{name}</h1>
      <a href="/">Back</a>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <br></br>
      <a href={`/profiles/${id}/posts`}>Posts</a>
    </>
  )
}

export default Profile;