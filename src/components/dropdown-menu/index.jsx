import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import { handleLanguageChange } from '../../utils/translation'
import { logout, userPaymentConfirm } from '../../redux/user/action'
import { useTheme } from '../../context/test/test-state'
import PaymentModal from '../internal/payment-modal'

import { FAKE_ROUTE } from '../../constants/routs'
import { THEME_CHANGE_PAYMENT } from '../../constants/payment'

import './index.scss'

function DropdownMenu({ isVisibleMenu, isVisibleDropdown }) {
  const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false)

  const { t } = useTranslation('translation')

  const { changeThemeToDark, themeChangeToggle } = useTheme()

  const dispatch = useDispatch()

  const { user } = useSelector(state => state.user)
  const { id, amount } = user

  const themeChangePaymentToggle = () =>
    setIsPaymentModalVisible(!isPaymentModalVisible)

  const paymentConfirm = (id, amount) => {
    if (amount >= THEME_CHANGE_PAYMENT) {
      dispatch(userPaymentConfirm(id, amount))
      themeChangeToggle()
    } else {
      alert(t('dropdownMenu.key', { amount }))
    }
  }

  const areUserLogout = () => dispatch(logout())

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
          <div className="dropdown-menu__language-change dropdown-menu__item">
            <Link to={FAKE_ROUTE} onClick={handleLanguageChange}>
              {t('changeLanguage')}
            </Link>
          </div>

          <div className="dropdown-menu__theme-change dropdown-menu__item">
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

export default DropdownMenu

DropdownMenu.propTypes = {
  isVisibleMenu: PropTypes.bool,
  isVisibleDropdown: PropTypes.func
}
