import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import { handleLanguageChange } from '../../utils/translation'

import PropTypes from 'prop-types'

import { useTheme } from '../../context/test/test-state'

import { logout, userPaymentConfirm } from '../../store/user/action'

import { FAKE_ROUTE } from '../../constants/routs'

import PaymentModal from './payment-modal'

import './index.scss'

function DropdownMenu({ isVisibleMenu, isVisibleDropdown }) {
  const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false)

  const { t } = useTranslation('translation')

  const { changeThemeToDark, themeChangeToggle } = useTheme()

  const dispatch = useDispatch()
  const history = useHistory()

  const { user } = useSelector(state => state.user)
  const { id, amount } = user

  const themeChangePaymentToggle = () =>
    setIsPaymentModalVisible(!isPaymentModalVisible)

  const paymentConfirm = (id, amount) => {
    if (amount >= 20) {
      dispatch(userPaymentConfirm(id, amount))
      themeChangeToggle()
    } else {
      alert(`Пополните счёт, ${amount}$ не хватает для смены темы`)
    }
  }

  const areUserLogout = () => dispatch(logout(history))

  return (
    <div className="dropdown-menu">
      <Link
        className="dropdown-menu__button"
        to={FAKE_ROUTE}
        onClick={isVisibleDropdown}
      >
        {t('menu')}
      </Link>

      {isVisibleMenu && (
        <div className="dropdown-menu__container">
          <div className="dropdown-menu__language_change dropdown-menu__item">
            <Link to={FAKE_ROUTE} onClick={handleLanguageChange}>
              {t('changeLanguage')}
            </Link>
          </div>

          <div className="dropdown-menu__theme_change dropdown-menu__item">
            <Link to={FAKE_ROUTE} onClick={themeChangePaymentToggle}>
              {isPaymentModalVisible ? (
                <PaymentModal
                  handleConfirmPayment={() => paymentConfirm(id, amount)}
                  handleClose={themeChangePaymentToggle}
                />
              ) : null}
              {changeThemeToDark ? t('light') : t('dark')}
            </Link>
          </div>

          <div className="dropdown-menu__logout dropdown-menu__item">
            <Link to={FAKE_ROUTE} onClick={areUserLogout}>
              {t('logout')}
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

DropdownMenu.propTypes = {
  handleLanguageChange: PropTypes.func,
  themeChangePaymentToggle: PropTypes.func,
  areUserLogout: PropTypes.func
}

export default DropdownMenu
