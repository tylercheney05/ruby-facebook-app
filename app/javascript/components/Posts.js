import React from 'react';

const Posts = ({ profile, posts }) => {
  const { name, id } = profile
  return (
    <>
      <h1>Posts from {name}</h1>
      <a href={`/profiles/${id}/posts/new`}>New Post</a>
      <br/>
      <a href={`/profiles/${id}`}>Back to {name}</a>
      { posts.map((post) => (
        <div key={post.id}>
          <h1>{post.body}</h1>
        </div>
      ))}
    </>
  )
}

export default Posts;