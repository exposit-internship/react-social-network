import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { withTranslation } from 'react-i18next'

import { FAKE_ROUTE } from '../../constants/routs'

import { addUserDeposite } from '../../store/user/action'

import ReplenishModal from './replenish-modal'

import './replenish-modal/index.scss'

export class Monetization extends Component {
  state = {
    isModalVisible: false,
    depositeValue: '',
    userPassword: ''
  }

  componentDidMount() {}

  toggleModalVisibitity = e => {
    e.preventDefault()
    this.props.closeDropDown()
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleAddUserDeposit = event => {
    event.preventDefault()

    let { depositeValue, userPassword } = this.state

    let { email, id, amount } = this.props.user

    depositeValue = parseInt(depositeValue, 10)
    amount = parseInt(amount, 10)

    userPassword = window.btoa(userPassword)

    if (!depositeValue || !window.btoa(userPassword)) {
      return
    }

    this.props.increaseUserAmount({
      email,
      id,
      amount,
      depositeValue,
      userPassword
    })

    this.setState({
      isModalVisible: false,
      depositeValue: '',
      userPassword: ''
    })
  }

  render() {
    const { isModalVisible } = this.state
    const { t } = this.props

    return (
      <div className="monetization">
        <Link to={FAKE_ROUTE} onClick={this.toggleModalVisibitity}>
          {t('replenish')}
        </Link>

        {isModalVisible && (
          <ReplenishModal
            handleAddUserDeposit={this.handleAddUserDeposit}
            toggleModalVisibitity={this.toggleModalVisibitity}
            handleChange={this.handleChange}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ user: currentUserState }) => ({
  user: currentUserState.user
})

const mapDispatchToProps = dispatch => ({
  increaseUserAmount: data => dispatch(addUserDeposite(data))
})

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(Monetization)
)
