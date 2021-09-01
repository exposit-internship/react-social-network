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
  addPostComment
} from '../../../redux/posts/action'

import './index.scss'
import './../post/index.scss'

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

  const { displayName, avatarURL, imageURL, caption, comments, id } = post

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

  // const commentHandleChange = event => {
  //   const { name, value } = event.target
  //   setComment({ ...comment, [name]: value })
  //   console.log('COMMENT', comment)
  // }

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

  const addComment = (event, id) => {
    event.preventDefault()
    dispatch(addPostComment(id))
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
              placeholder={t('postsBox.placeholder')}
            />
          </div>
          <input
            type="text"
            name="imageURL"
            value={imageURL}
            onChange={handleChange}
            placeholder={t('postsBox.image')}
            className="posts__image_upload"
          />
          <button
            type="submit"
            className="posts__box-btn"
            onClick={publishPost}
          >
            {t('postsBox.button')}
          </button>
        </form>
      </div>
      {posts?.length
        ? posts.map(item => (
            <Fragment key={item.id}>
              <Post
                displayName={item.displayName}
                avatarURL={item.avatarURL}
                image={item.imageURL}
                caption={item.caption}
                handleDelete={() => handleDelete(item.id)}
              />

              <div className="post__comment">
                {item.comments?.length &&
                  item.comments.map((comment, idx) => (
                    <p className="post__comment_container" key={idx}>
                      <strong className="post__comment_user">
                        {comment.userName}
                      </strong>
                      <span className="post__comment_message">
                        {comment.userComment}
                      </span>
                    </p>
                  ))}
              </div>

              <div className="comments">
                <div className="comments__post">
                  <form
                    onSubmit={addComment}
                    className="comments__post_container"
                  >
                    <input
                      className="comments__post_message"
                      placeholder={t('comment.placeholder')}
                      type="text"
                      name="userComment"
                      value={comment.userComment}
                      onChange={e => setComment(e.target.value)}
                    />
                    <button className="comments__post_button" type="submit">
                      {t('comment.addComment')}
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
