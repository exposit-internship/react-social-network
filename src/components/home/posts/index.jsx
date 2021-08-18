import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Post from '../post'
import { addPost, deletePost, getPosts } from '../../../store/posts/action'

import Comments from '../comments'
import './index.scss'

const Posts = () => {
  const [post, setPost] = useState({
    displayName: '',
    avatarURL:
      'https://seeklogo.com/images/M/mountain-adventure-time-logo-55A1B18F0E-seeklogo.com.png',
    imageURL: '',
    caption: '',
    id: uuidv4(),
    comments: []
  })

  let { displayName, avatarURL, imageURL, caption, comments } = post

  const history = useHistory()
  const dispatch = useDispatch()

  const { posts } = useSelector(state => state.posts)

  const { t } = useTranslation('translation')

  const user = JSON.parse(localStorage.getItem('user'))
  let { firstName, secondName } = user

  const handleChange = e => {
    const { name, value } = e.target
    setPost({ ...post, [name]: value })
  }

  const publishPost = event => {
    event.preventDefault()

    if (!caption || !imageURL) {
      console.log('Please add data')
    } else {
      dispatch(
        addPost({ ...post, displayName: `${firstName} ${secondName}` }, history)
      )
    }
  }

  const handleDelete = useCallback(id => {
    dispatch(deletePost(id))
  }, [])

  useEffect(() => {
    dispatch(getPosts())
  }, [getPosts, addPost, deletePost])

  return (
    <div className="posts">
      <div className="posts__header ">
        <h3>{t('Home')}</h3>
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
            Post
          </button>
        </form>
      </div>
      {posts &&
        posts.length > 0 &&
        posts.map(({ id, displayName, avatarURL, imageURL, caption }) => (
          <>
            <Post
              key={id}
              displayName={displayName}
              avatarURL={avatarURL}
              image={imageURL}
              caption={caption}
              onClick={() => handleDelete(id)}
            />
            <Comments />
          </>
        ))}
    </div>
  )
}

export default Posts
