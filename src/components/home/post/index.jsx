// import Comments from '../comments'

import './index.scss'

const Post = ({
  displayName,
  avatarURL,
  image,
  caption,
  onClick,
  commentUserName,
  commentUserMessage
}) => (
  <div className="post">
    <div className="post__header">
      <div className="post__header_info">
        <img
          className="post__avatart"
          width="40px"
          height="40px"
          src={avatarURL}
          alt="user-avatar"
        />
        <h3 className="post__username">{`${displayName}`}</h3>
      </div>
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
    <div className="comment">
      <p className="commet__user">{commentUserName}</p>
      <span className="comment__message">{commentUserMessage}</span>
    </div>
  </div>
)

export default Post
