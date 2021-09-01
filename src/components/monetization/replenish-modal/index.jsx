import { PureComponent } from 'react'
import { withTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import './index.scss'

export class ReplenishModal extends PureComponent {
  render() {
    const {
      depositeValue,
      userPassword,
      toggleModalVisibitity,
      handleAddUserDeposit,
      handleChange
    } = this.props

    const { t } = this.props

    return (
      <div className="replenishModal__container">
        <form onSubmit={handleAddUserDeposit} className="replenishModal__form">
          <label className="replenishModal__label">{t('enterSum')}</label>
          <input
            className="replenishModal__depositeValue-input"
            type="number"
            name="depositeValue"
            value={depositeValue}
            onChange={handleChange}
          />
          <label className="replenishModal__label">
            {t('enterYourPassword')}
          </label>
          <input
            className="replenishModal__userPassword-input"
            type="password"
            name="userPassword"
            value={userPassword}
            onChange={handleChange}
          />
          <div className="replenishModal__buttons">
            <button className="replenishModal__button-submit">
              {t('submit')}
            </button>
            <button
              className="replenishModal__button-cancel"
              onClick={toggleModalVisibitity}
            >
              {t('cancel')}
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default withTranslation()(ReplenishModal)

ReplenishModal.propTypes = {
  depositeValue: PropTypes.number,
  userPassword: PropTypes.string,
  toggleModalVisibitity: PropTypes.func,
  handleAddUserDeposit: PropTypes.func,
  handleChange: PropTypes.func
}
