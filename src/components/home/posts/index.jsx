import React, { useState } from 'react'
import './index.scss'

const Posts = () => {
  const [post, setPost] = useState('')

  const publishPost = event => {
    event.preventDefault()

    console.log(post)
    setPost('')
  }

  return (
    <div className="posts">
      <div className="posts__header">
        <h3>Home</h3>
      </div>

      <div className="posts__box">
        <form className="posts__form">
          <div className="posts__input">
            <img
              width="40px"
              height="40px"
              src="https://seeklogo.com/images/M/mountain-adventure-time-logo-55A1B18F0E-seeklogo.com.png"
              alt="avatar"
            />
            <input
              type="text"
              value={post}
              onChange={e => setPost(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="posts__box-btn"
            onClick={publishPost}
          >
            Post
          </button>
        </form>
      </div>

      <div className="post">
        <div className="post__header">
          <img
            className="post__avatart"
            width="40px"
            height="40px"
            src="https://seeklogo.com/images/M/mountain-adventure-time-logo-55A1B18F0E-seeklogo.com.png"
            alt=""
          />
          <h3 className="post__username">User Name</h3>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/instagram-655ce.appspot.com/o/images%2FDTqWY69jWeg.jpg?alt=media&token=b6eb483f-3645-40ac-9a0a-6caf2c192fc9"
          alt=""
          className="post__img"
        />
        <h4 className="post__text">
          {' '}
          <strong>username </strong>Hardcode text
        </h4>
      </div>
    </div>
  )
}

export default Posts
