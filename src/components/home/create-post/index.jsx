import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import './index.scss'

const CreatePost = ({
  avatarURL,
  imageURL,
  caption,
  handleChange,
  publishPost
}) => {
  const { t } = useTranslation('translation')

  return (
    <div className="create-post">
      <div className="create-post__header">
        <h3>{t('home')}</h3>
      </div>
      <div className="create-post__box">
        <form className="create-post__form">
          <div className="create-post__input">
            <img src={avatarURL} alt="avatar" />
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
            className="create-post__image-upload"
          />
          <button
            type="submit"
            className="create-post__box-button"
            onClick={publishPost}
          >
            {t('postsBox.button')}
          </button>
        </form>
      </div>
    </div>
  )
}
export default CreatePost

CreatePost.propTypes = {
  avatarURL: PropTypes.string,
  imageURL: PropTypes.string,
  caption: PropTypes.string,
  handleChange: PropTypes.func,
  publishPost: PropTypes.func
}
