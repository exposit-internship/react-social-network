import { Component } from 'react'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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

  // TODO how to get user in state all time/ get request componentDidUpdate or localstorage
  componentDidMount() {
    // DB('/users').then(({ data }) => console.log('USERDATA', data))
    // const { email, password, id, amount } = this.props.user
    // console.log('CURRENT USER PROPS:', email, password, id, amount)
    // console.log('MONETIZATION PROPS', this.props)
  }

  toggleModalVisibitity = e => {
    e.preventDefault()
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
    // console.table({ name, value })
  }

  handleAddUserDeposit = event => {
    event.preventDefault()

    let { depositeValue, userPassword } = this.state
    console.table({ depositeValue, userPassword })

    let { email, password, id, amount } = this.props.user
    console.table({ email, password, id, amount, depositeValue })

    depositeValue = parseInt(depositeValue, 10)
    amount = parseInt(amount, 10)
    console.log(depositeValue)

    userPassword = window.btoa(userPassword)

    if (!depositeValue || !userPassword) {
      return
    }

    console.log(this.state)

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
