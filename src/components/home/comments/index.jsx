import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addPostComment } from '../../../store/posts/action'
import Comment from './comment'

import './index.scss'

function Comments() {
  const [comment, setComment] = useState({
    userName: '',
    userComment: ''
  })
  const dispatch = useDispatch()

  const user = JSON.parse(localStorage.getItem('user'))
  const { firstName, secondName } = user

  let { userName, userComment } = comment
  userName = `${firstName} ${secondName}`

  const handleChange = event => {
    const { name, value } = event.target
    setComment({ ...comment, [name]: value })
  }


  // TODO need poster id
  const addUserComment = event => {
    event.preventDefault()
    const { value } = event.target

    if (!userComment) {
      return
    } else {
      dispatch(
        addPostComment({
          ...comment,
          userName,
          userComment: value
        })
      )
      console.log({ userName, userComment })
      setComment({
        userName: '',
        userComment: ''
      })
    }
  }

  return (
    <div className="comments">
      {comment &&
        comment.length &&
        comment.map(idx => (
          <Comment key={idx} name={userName} message={userComment} />
        ))}

      <div className="comments__post">
        <form onSubmit={addUserComment} className="comments__post_container">
          <input
            className="comments__post_message"
            placeholder="Add a comment..."
            type="text"
            name="userComment"
            value={userComment}
            onChange={handleChange}
          />
          {userComment ? (
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
  )
}

export default Comments
