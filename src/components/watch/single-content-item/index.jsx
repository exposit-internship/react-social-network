import { img_300, unavailable } from '../config'
import './index.scss'

function SingleContentItem({
  poster_path,
  title,
  name,
  media_type,
  release,
  date,
  onMouseOver
}) {
  return (
    <div className="single-content-item">
      <img
        src={poster_path ? `${img_300}/${poster_path} ` : unavailable}
        alt={title || name}
        className="single-content-item__poster"
        onMouseOver={onMouseOver}
      />
    </div>
  )
}

export default SingleContentItem
