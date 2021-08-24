import { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'

import Post from '../post'
import {
  addPost,
  deletePost,
  getCurrentPost,
  getPosts
} from '../../../store/posts/action'

import Comments from '../comments'

import './index.scss'
import Comment from '../comments/comment'

const Posts = () => {
  const [post, setPost] = useState({
    displayName: '',
    avatarURL:
      'https://seeklogo.com/images/M/mountain-adventure-time-logo-55A1B18F0E-seeklogo.com.png',
    imageURL: '',
    caption: '',
    id: uuidv4(),
    comments: [
      {
        userName: 's',
        userComment: 's'
      }
    ]
  })

  let { displayName, avatarURL, imageURL, caption, comments } = post

  const history = useHistory()
  const dispatch = useDispatch()

  const { posts } = useSelector(state => state.posts)

  const { t } = useTranslation('translation')

  const { user } = useSelector(state => state.user)

  useEffect(() => dispatch(getPosts()), [])

  let { firstName, secondName } = user

  const handleChange = event => {
    const { name, value } = event.target
    setPost({ ...post, [name]: value })
  }

  const publishPost = () => {
    if (!caption || !imageURL) {
      return
    } else {
      dispatch(
        addPost({ ...post, displayName: `${firstName} ${secondName}` }, history)
      )
    }
  }

  const handleDelete = id => {
    dispatch(deletePost(id))
    console.log('ID', id)
  }

  // const handleGetCurrentPost = id => dispatch(getCurrentPost(id))

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
      {posts &&
        posts.length > 0 &&
        posts.map(
          ({
            id,
            displayName,
            avatarURL,
            imageURL,
            caption,
            commentUserName,
            commentUserMessage
          }) => (
            <Fragment key={id}>
              <Post
                displayName={displayName}
                avatarURL={avatarURL}
                image={imageURL}
                caption={caption}
                onClick={() => handleDelete(id)}
                commentUserName={comments.userNAme}
                commentUserMessage={comments.userComment}
              />
              <div className="comments">
                <div className="comments__post">
                  <form
                    onSubmit={() => console.log('comment')}
                    className="comments__post_container"
                  >
                    <input
                      className="comments__post_message"
                      placeholder="Add a comment..."
                      type="text"
                      name="userComment"
                      value={e => e.target.value}
                      onChange={handleChange}
                    />
                    {user ? (
                      <button className="comments__post_button" type="submit">
                        Post
                      </button>
                    ) : (
                      <button className="comments__post_button" disabled>
                        {' '}
                        Post
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </Fragment>
          )
        )}
    </div>
  )
}

export default Posts
