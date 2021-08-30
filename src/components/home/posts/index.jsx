import { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useHistory } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import { v4 as uuidv4 } from 'uuid'

import Post from '../post'
import {
  addPost,
  deletePost,
  getPosts,
  addPostComment,
  getComments
} from '../../../store/posts/action'

import './index.scss'

const Posts = () => {
  const { user } = useSelector(state => state.user)

  const { firstName, secondName } = user
  
  const [comment, setComment] = useState({
    userName: `${firstName} ${secondName}`,
    userComment: ''
  })
  const [post, setPost] = useState({
    displayName: `${firstName} ${secondName}`,
    avatarURL:
      'https://seeklogo.com/images/M/mountain-adventure-time-logo-55A1B18F0E-seeklogo.com.png',
    imageURL: '',
    caption: '',
    id: uuidv4(),
    comments: []
  })

  const { displayName, avatarURL, imageURL, caption, comments } = post

  const history = useHistory()
  const dispatch = useDispatch()

  const { t } = useTranslation('translation')

  const { posts } = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  const handleChange = event => {
    const { name, value } = event.target
    setPost({ ...post, [name]: value })
  }

  const commentHandleChange = event => {
    const { name, value } = event.target
    setComment({ ...comment, [name]: value })
    console.log('COMMENT', comment)
  }

  const publishPost = event => {
    event.preventDefault()
    caption &&
      imageURL &&
      dispatch(addPost({ ...post, displayName: `${firstName} ${secondName}` }))
    setPost({
      avatarURL:
        'https://seeklogo.com/images/M/mountain-adventure-time-logo-55A1B18F0E-seeklogo.com.png',
      imageURL: '',
      caption: ''
    })
  }

  const handleDelete = id => dispatch(deletePost(id))

  const addComment = event => {
    event.preventDefault()
    dispatch(addPostComment())
  }

  return (
    <div className="posts">
      <div className="posts__header">
        <h3>{t('home')}</h3>
      </div>
      <div className="posts__box">
        <form className="posts__form">
          <div className="posts__input">
            <img width="40px" height="40px" src={avatarURL} alt="avatar" />
            <input
              type="text"
              name="caption"
              value={caption}
              onChange={handleChange}
              placeholder="What's happening?"
            />
          </div>
          <input
            type="text"
            name="imageURL"
            value={imageURL}
            onChange={handleChange}
            placeholder="Enter your image..."
            className="posts__image_upload"
          />
          <button
            type="submit"
            className="posts__box-btn"
            onClick={publishPost}
          >
            {t('post')}
          </button>
        </form>
      </div>
      {posts?.length
        ? posts.map(({ id, displayName, avatarURL, imageURL, caption }) => (
            <Fragment key={id}>
              <Post
                displayName={displayName}
                avatarURL={avatarURL}
                image={imageURL}
                caption={caption}
                handleDelete={() => handleDelete(id)}
              />

              <div className="comments">
                <div className="comments__post">
                  <form
                    onSubmit={addComment}
                    className="comments__post_container"
                  >
                    <input
                      className="comments__post_message"
                      placeholder="Add a comment..."
                      type="text"
                      name="userComment"
                      value={comment.userComment}
                      onChange={commentHandleChange}
                    />
                    <button className="comments__post_button" type="submit">
                      Post
                    </button>
                  </form>
                </div>
              </div>
            </Fragment>
          ))
        : null}
    </div>
  )
}

export default Posts
