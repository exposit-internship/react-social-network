import classNames from 'classnames'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from '../../../context/test/test-state'
import { addPostComment } from '../../../store/posts/action'
import './index.scss'

function Comments() {
  const user = JSON.parse(localStorage.getItem('user'))
  const { firstName, secondName } = user

  const [comment, setComment] = useState({
    userName: '',
    userComment: ''
  })
  let { userName, userComment } = comment
  const dispatch = useDispatch()

  const handleChange = event => {
    const { name, value } = event.target
    setComment({ ...comment, [name]: value })
  }
  const { changeThemeToDark } = useTheme()

  // const {posts}  = useSelector(state => state.posts)
  // console.log(posts)
  let postId

  const addUserComment = event => {
    event.preventDefault()

    if (!userComment) {
      return
    } else {
      dispatch(
        addPostComment(postId, {
          ...comment,
          userName: `${firstName}${secondName}`,
          userComment: event.target.value
        })
      )
      setComment({
        userName: '',
        userComment: ''
      })
    }
  }

  return (
    <div className="comments">
      <div className="comments__box">
        <p className="commets__user"></p>
        <p className="comments__comment"></p>
      </div>
      <div className="comments__post">
        <form className="comments__post_container">
          <input
            className={classNames('comments__post_message', {
              dark__393939: changeThemeToDark
            })}
            placeholder="Add a comment..."
            type="text"
            name="userComment"
            value={userComment}
            onChange={handleChange}
          />
          {userComment ? (
            <button
              className="comments__post_button"
              type="submit"
              onClick={addUserComment}
            >
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
