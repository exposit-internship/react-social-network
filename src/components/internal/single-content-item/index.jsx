import PropTypes from 'prop-types'

import { img_300, unavailable } from '../../../constants/no-poster-image'

import './index.scss'

const SingleContentItem = ({
  poster_path,
  title,
  name,
  handleClick,
  handleMouseOut
}) => (
  <div
    className="single-content-item"
    onClick={handleClick}
    onMouseOut={handleMouseOut}
  >
    <img
      src={poster_path ? `${img_300}/${poster_path} ` : unavailable}
      alt={title || name}
      className="single-content-item__poster"
      loading="lazy"
    />
  </div>
)

export default SingleContentItem

SingleContentItem.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  handleClick: PropTypes.func,
  handleMouseOut: PropTypes.func
}
