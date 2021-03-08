import React from 'react';

const ProfileNew = ({ profile }) => {
  const { name, email, phone } = profile
  const defaultName = name ? name : ""
  const defaultEmail = email ? email : ""
  const defaultPhone = phone ? phone : ""
  return (
    <>
      <h1>New Profile</h1>
      <form action="/profiles" method="post">
        <input
          placeholder="Name"
          type="text"
          defaultValue={defaultName}
          name="profile[name]"
        /><br/><br/>
        <input
          placeholder="Email"
          type="email"
          defaulValue={defaultEmail}
          name="profile[email]"
        /><br/><br/>
        <input 
          placeholder="Phone"
          type="text"
          defaultValue={defaultPhone}
          name="profile[phone]"
        /><br/><br/>
        <button type="submit">Add Profile</button>
      </form>
    </>
  )
}
export default ProfileNew