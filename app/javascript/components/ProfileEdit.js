import React from 'react';

const ProfileEdit = ({ profile }) => {
  const { name, email, phone, id } = profile;
  const defaultName = name ? name : "";
  const defaultEmail = email ? email : "";
  const defaultPhone = phone ? phone : "";
  return (
    <>
      <h1>{`Edit Profile for ${name}`}</h1>
      <form action={`/profiles/${id}`} method="post">
        <input type="hidden" name="_method" value="patch"/>
        <input
          placeholder="Name"
          type="text"
          defaultValue={defaultName}
          name="profile[name]"
        /><br/><br/>
        <input
          placeholder="Email"
          type="email"
          defaultValue={defaultEmail}
          name="profile[email]"
        /><br/><br/>
        <input 
          placeholder="Phone"
          type="text"
          defaultValue={defaultPhone}
          name="profile[phone]"
        /><br/><br/>
        <button type="submit">Update Profile</button>
      </form>
    </>
  )
}
export default ProfileEdit;