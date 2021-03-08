import React from 'react';

const Profiles = ({ profiles }) => {
  return (
    <>
      <h1>Facebook Profiles</h1>
      <a href="profiles/new">Create a new Profile</a>

      { profiles.map( (profile) =>
        <div>
          <h3><a href={`/profiles/${profile.id}`}>{profile.name}</a></h3>
          <a href={`/profiles/${profile.id}/edit`}>Edit</a>
          <br/>
          <a
            href={`/profiles/${profile.id}`}
            data-method="delete"
          >
            Delete
          </a>
        </div>
      )}
    </>
  )
}

export default Profiles;