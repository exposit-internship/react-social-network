import { PureComponent } from 'react'
import './index.scss'

export class ReplenishModal extends PureComponent {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const {
      depositeValue,
      userPassword,
      toggleModalVisibitity,
      handleAddUserDeposit,
      handleChange
    } = this.props

    return (
      <div className="replenishModal__container">
        <form onSubmit={handleAddUserDeposit} className="replenishModal__form">
          <label className="replenishModal__label">Enter Sum</label>
          <input
            className="replenishModal__depositeValue_input"
            type="number"
            name="depositeValue"
            value={depositeValue}
            onChange={handleChange}
          />
          <label className="replenishModal__label">Enter your password </label>
          <input
            className="replenishModal__userPassword_input"
            type="password"
            name="userPassword"
            value={userPassword}
            onChange={handleChange}
          />
          <div className="replenishModal__buttons">
            <button className="replenishModal__button_submit">Submit</button>
            <button
              className="replenishModal__button_cancel"
              onClick={toggleModalVisibitity}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default ReplenishModal
