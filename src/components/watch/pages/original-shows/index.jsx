import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { getShows } from '../../../../redux/shows/action'

import { SingleContentItem, SingleShowModal } from '../../../internal'

import './index.scss'

function OriginalShows() {
  const [isShowModalVisible, setIsShowModalVisible] = useState(true)
  const [modalData, setModalData] = useState(null)

  const { t } = useTranslation('translation')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getShows())
  }, [])

  const { shows } = useSelector(state => state.shows)

  const handleShowDescription = id => {
    const currentShow = shows.find(show => show.id === id)
    setModalData(currentShow)
    setIsShowModalVisible(true)
  }

  const handleHideDescription = () => {
    setIsShowModalVisible(false)
    setModalData(null)
  }

  return (
    <div className="original-shows">
      <div className="original-shows__content-title">
        <h1>{t('watch.title')} </h1>
      </div>
      <div className="original-shows__content-body">
        {shows &&
          shows.length &&
          shows.map(({ poster_path, id }) => {
            return (
              <SingleContentItem
                key={id}
                poster_path={poster_path}
                handleClick={() => handleShowDescription(id)}
                handleMouseOut={() => handleHideDescription()}
              />
            )
          })}
        {isShowModalVisible && modalData && (
          <SingleShowModal
            key={modalData.id}
            poster_path={modalData.poster_path}
            title={modalData.title}
            name={modalData.name}
            release_date={modalData.release_date}
            overview={modalData.overview}
          />
        )}
      </div>
    </div>
  )
}

export default OriginalShows
