import { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'

import CreatePost from '../create-post'
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
    userName: '',
    userComment: ''
  })
  const { userComment } = comment

  const [post, setPost] = useState({
    displayName: `${firstName} ${secondName}`,
    avatarURL:
      'https://seeklogo.com/images/M/mountain-adventure-time-logo-55A1B18F0E-seeklogo.com.png',
    imageURL: '',
    caption: '',
    id: uuidv4(),
    comments: []
  })

  const { avatarURL, imageURL, caption } = post

  const dispatch = useDispatch()

  const { t } = useTranslation('translation')

  const { posts } = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  const handleChange = event => {
    const { name, value } = event.target
    setPost({ ...post, [name]: value })
    setComment({ ...comment, [name]: value })
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

  const addUserComment = (event, { id, comments }) => {
    event.preventDefault()
    userComment &&
      dispatch(
        addPostComment(id, {
          comments: [
            ...comments,
            { userName: `${firstName} ${secondName}`, userComment }
          ]
        })
      )

    setComment({
      userComment: ''
    })
  }

  return (
    <div className="posts">
      <CreatePost
        imageURL={imageURL}
        avatarURL={avatarURL}
        caption={caption}
        handleChange={handleChange}
        publishPost={publishPost}
      />
      {posts?.length
        ? posts.map(post => (
            <Fragment key={post.id}>
              <Post
                displayName={post.displayName}
                avatarURL={post.avatarURL}
                image={post.imageURL}
                caption={post.caption}
                handleDelete={() => handleDelete(post.id)}
              />

              <div className="post__comment">
                {post.comments.map((comment, idx) => (
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
                  <form className="comments__post_container">
                    <input
                      className="comments__post_message"
                      placeholder={t('comment.placeholder')}
                      type="text"
                      name="userComment"
                      value={userComment}
                      onChange={handleChange}
                    />
                    <button
                      className="comments__post_button"
                      type="submit"
                      onClick={event => addUserComment(event, post)}
                    >
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
