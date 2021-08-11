import './index.scss'

const Post = ({ displayName, avatarURL, image, caption, onClick }) => {
  

  return (
    <div className="post">
      <div className="post__header">
        <img
          className="post__avatart"
          width="40px"
          height="40px"
          src={avatarURL}
          alt="user-avatar"
        />
        <h3 className="post__username">{`${displayName}`}</h3>
        <button className="post__delete_btn" onClick={onClick}>
          X
        </button>
      </div>
      <div className="post__body">
        <img src={image} alt="" className="post__img" />
        <h4 className="post__text">
          <strong>{`${displayName} : `} </strong>
          {caption}
        </h4>
      </div>

      <div className="post__comments">
        <form className="post__comments_container">
          <input
            className="post__comments_message"
            placeholder="Add a comment..."
            type="text"
          />
          <button className="post__comments_btn" type="submit">
            Post
          </button>
        </form>
      </div>
    </div>
  )
}

export default Post
