import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'
import classNames from 'classnames'

import Post from '../post'
import { addPost, deletePost, getPosts } from '../../../store/posts/action'

import Comments from '../comments'
import './index.scss'
import { INDEX_ROUTE } from '../../../constants/routs'
import { useTheme } from '../../../context/test/test-state'

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
  const { changeThemeToDark } = useTheme()

  const user = JSON.parse(localStorage.getItem('user'))
  let { firstName, secondName } = user

  const handleChange = event => {
    const { name, value } = event.target
    setPost({ ...post, [name]: value })
  }

  const publishPost = () => {
    if (!caption || !imageURL) {
      console.log('Please add data')
    } else {
      dispatch(
        addPost({ ...post, displayName: `${firstName} ${secondName}` }, history)
      )
      history.push(INDEX_ROUTE)
    }
  }

  const handleDelete = id => dispatch(deletePost(id))

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <div className={classNames('posts', { darkmode: changeThemeToDark })}>
      <div className={classNames('posts__header', { darkmode: changeThemeToDark })}>
        <h3>{t('home')}</h3>
      </div>

      <div
        className={classNames('posts__box', {
          dark__background: changeThemeToDark
        })}
      >
        <form className="posts__form">
          <div className="posts__input">
            <img width="40px" height="40px" src={avatarURL} alt="avatar" />
            <input
              type="text"
              name="caption"
              value={caption}
              onChange={handleChange}
              placeholder="What's happening?"
              className={classNames({
                dark__393939: changeThemeToDark
              })}
            />
          </div>
          <input
            type="text"
            name="imageURL"
            value={imageURL}
            onChange={handleChange}
            placeholder="Enter your image..."
            className={classNames('posts__image_upload', {
              dark__393939: changeThemeToDark
            })}
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
