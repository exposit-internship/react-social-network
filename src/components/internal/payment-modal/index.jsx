import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import './index.scss'

const PaymentModal = ({ handleConfirmPayment, handleClose }) => {
  const { t } = useTranslation('translation')

  return (
    <div className="payment-modal">
      <div className="payment-modal__body">
        <p>{t('themeChangeMessage')}</p>
      </div>
      <div className="payment-modal__footer">
        <button
          className="payment-modal__confirm-button"
          type="submit"
          onClick={handleConfirmPayment}
        >
          {t('confirm')}
        </button>
        <button className="payment-modal__cancel-button" onClick={handleClose}>
          {t('cancel')}
        </button>
      </div>
    </div>
  )
}

export default PaymentModal

PaymentModal.propTypes = {
  handleConfirmPayment: PropTypes.func,
  handleClose: PropTypes.func
}
