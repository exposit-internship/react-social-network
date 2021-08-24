// import { useCallback } from 'react'
// import { useState } from 'react'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'

// import { addPostComment, getCurrentPost } from '../../../store/posts/action'
// import Comment from './comment'

// import './index.scss'

// function Comments() {
//   const [comment, setComment] = useState({
//     userName: '',
//     userComment: ''
//   })
//   const dispatch = useDispatch()

//   const { user } = useSelector(state => state.user)
//   const { firstName, secondName } = user

//   const { posts } = useSelector(state => state.posts)

//   const { id } = posts
//   console.log('ID', id)

//   let { userName, userComment } = comment

//   const handleChange = event => {
//     const { name, value } = event.target
//     setComment({ ...comment, [name]: value })
//   }

 
//   // TODO need poster id
//   const addUserComment = (event, id, userName, userComment) => {
//     event.preventDefault()
//     const { value } = event.target

//     if (!userComment) {
//       return
//     } else {
//       dispatch(getCurrentPost(id))
//       console.log('CURRENTID', id)
//     }
//   }

//   return (
//     <div className="comments">
//       {comment &&
//         comment.length &&
//         comment.map(idx => (
//           <Comment key={idx} name={userName} message={userComment} />
//         ))}

//       <div className="comments__post">
//         <form onSubmit={addUserComment} className="comments__post_container">
//           <input
//             className="comments__post_message"
//             placeholder="Add a comment..."
//             type="text"
//             name="userComment"
//             value={userComment}
//             onChange={handleChange}
//           />
//           {userComment ? (
//             <button className="comments__post_button" type="submit">
//               Post
//             </button>
//           ) : (
//             <button className="comments__post_button" disabled>
//               {' '}
//               Post
//             </button>
//           )}
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Comments
