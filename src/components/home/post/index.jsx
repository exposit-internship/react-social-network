import PropTypes from 'prop-types'

import { ReactComponent as CloseIcon } from '../../../images/close-icon.svg'

import './index.scss'

const Post = ({
  displayName,
  avatarURL,
  image,
  caption,
  handleDelete
}) => (
  <div className="post">
    <div className="post__header">
      <div className="post__header-info">
        <img className="post__avatart" src={avatarURL} alt="user-avatar" loading='lazy' />
        <h3 className="post__username">{`${displayName}`}</h3>
      </div>
      <CloseIcon onClick={handleDelete} className="post__delete-button" />
    </div>
    <div className="post__body">
      <img src={image} alt="" className="post__img" />
      <h4 className="post__text">
        <strong>{`${displayName} : `} </strong>
        {caption}
      </h4>
    </div>
    
  </div>
)

export default Post

Post.propTypes = {
  displayName: PropTypes.string,
  avatarURL: PropTypes.string,
  image: PropTypes.string,
  caption: PropTypes.string,
  handleDelete: PropTypes.func,
  commentUserName: PropTypes.string,
  commentUserMessage: PropTypes.string
}
