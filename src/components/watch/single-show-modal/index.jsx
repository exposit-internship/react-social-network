import { img_300, unavailable } from '../config'

import './index.scss'

function SingleShowModal({ poster_path, title, name, release_date, overview }) {
  return (
    <div className="single-show-modal">
      <div className="single-show-modal__poster">
        <img
          src={poster_path ? `${img_300}/${poster_path}` : unavailable}
          alt={title || name}
        />
      </div>
      <div className="single-show-modal__info">
        <div className="single-show-modal__title">
          <p>{title}</p>
          <span>{release_date}</span>
        </div>
        <div className="single-show-modal__description">{overview}</div>
      </div>
    </div>
  )
}

export default SingleShowModal
