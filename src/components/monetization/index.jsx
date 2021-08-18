import { Component } from 'react'
import { connect } from 'react-redux'

import { addUserDeposite } from '../../store/user/action'
import { DB } from '../../core/axios'

import ReplenishModal from './replenish-modal'

import './replenish-modal/index.scss'


export class Monetization extends Component {
  state = {
    isModalVisible: false,
    depositeValue: '',
    userPassword: ''
  }

  async componentDidMount() {
    DB('/users').then(({ data }) => console.log('USERDATA', data))
    const { email, password, id, amount } = this.props.user
    console.log('CURRENT USER PROPS:', email, password, id, amount)
    console.log('MONETIZATION PROPS', this.props)
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

    password = window.btoa(password)

    if (!depositeValue || !userPassword) {
      return
    }

    console.log(this.state)

    this.props.increaseUserAmount({
      email,
      password,
      id,
      amount,
      depositeValue
    })

    this.setState({
      depositeValue: '',
      userPassword: ''
    })
  }

  render() {
    const { isModalVisible } = this.state

    return (
      <div className="monetization">
        <button onClick={this.toggleModalVisibitity}>Replenish</button>

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

export default connect(mapStateToProps, mapDispatchToProps)(Monetization)
