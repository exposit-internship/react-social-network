import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getShows } from '../../../../store/shows/action'

import SingleContentItem from '../../single-content-item'
import SingleShowModal from '../../single-show-modal'

import './index.scss'

function OriginalShows() {
  const [isShowModalVisible, setIsShowModalVisible] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getShows())
  }, [])

  const { shows } = useSelector(state => state.shows)

  const { poster_path, title, name, release_date, overview, id } = shows

  const handleShowDescription = (
    poster_path,
    title,
    name,
    release_date,
    overview,
    id
  ) => {
    const filteredShow = shows.filter(show => show.id === id)
    console.log('filteredShow', filteredShow)

    setIsShowModalVisible(true)
    console.log('workingOn', isShowModalVisible)
  }

  const handleHideDescription = () => {
    setIsShowModalVisible(false)
    console.log('workingOFF', isShowModalVisible)
  }

  return (
    <div className="original-shows">
      <div className="original-shows__content_title">
        <h1>FACEBOOK original shows</h1>
      </div>
      <div className="original-shows__content_body">
        {shows &&
          shows.length &&
          shows.map(
            ({ poster_path, title, name, release_date, overview, id }) => {
              return (
                <SingleContentItem
                  key={id}
                  poster_path={poster_path}
                  onMouseOver={() =>
                    handleShowDescription(
                      poster_path,
                      title,
                      name,
                      release_date,
                      overview,
                      id
                    )
                  }
                  onMouseOut={() => handleHideDescription()}
                />
              )
            }
          )}
        {isShowModalVisible &&
          shows.map(
            ({ poster_path, title, name, release_date, overview, id }) => {
              return (
                <SingleShowModal
                  key={id}
                  poster_path={poster_path}
                  title={title}
                  name={name}
                  release_date={release_date}
                  overview={overview}
                />
              )
            }
          )}
      </div>
    </div>
  )
}

export default OriginalShows
