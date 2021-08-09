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
      <img src={image} alt="" className="post__img" />
      <h4 className="post__text">
        <strong>{`${displayName} : `} </strong>
        {caption}
      </h4>
    </div>
  )
}

export default Post
