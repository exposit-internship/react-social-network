import './index.scss'

function Comments({ userName, comment, onChange, onClick }) {
  return (
    <div className="comments">
      <div className="comments__box">
        <p className="commets__user">{userName}</p>
        <p className="comments__comment">{comment}</p>
      </div>
      <div className="comments__post">
        <form className="comments__post_container">
          <input
            className="comments__post_message"
            placeholder="Add a comment..."
            type="text"
            value={comment}
            onChange={onChange}
          />
          <button
            className="comments__post_button"
            type="submit"
            onClick={onClick}
          >
            Post
          </button>
        </form>
      </div>
    </div>
  )
}

export default Comments
