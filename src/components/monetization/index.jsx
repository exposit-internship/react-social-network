import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUserDeposite } from '../../store/user/action'
import Modal from './modal'
import './modal/index.scss'

export class Monetization extends Component {
  state = {
    isOpenModal: false,
    depositeValue: '',
    userPassword: ''
  }

  handleOpenModal = () => {
    this.setState(prevState => {
      return {
        isOpenModal: !prevState.isOpenModal
      }
    })
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
    console.log('name', name)
    console.log('value', value)
  }

  handleAddUserDeposit = (event) => {
    event.preventDefault()


    this.setState({
      //how update amount
      //amount: this.state.depositeValue
    })

    console.log(this.state.user)
  }

  render() {

    return (
      <>
        <div>
          {/* {this.state.isOpenModal && (
            <Modal handleOpenModal={this.handleOpenModal} />
          )} */}
          <button onClick={this.handleOpenModal}>Replenish</button>
        </div>
        {this.state.isOpenModal && (
          <div className="monetization">
            <div className="monetization__container">
              <div className="monetization__form">
                <label>Enter Sum</label>
                <input
                  type="number"
                  name="depositeValue"
                  value={this.state.depositeValue}
                  onChange={this.handleChange}
                />
                <label>Enter your password </label>
                <input
                  type="text"
                  name="userPassword"
                  value={this.state.userPassword}
                  onChange={this.handleChange}
                />
                <div className="monetization__btn">
                  <button onClick={this.handleAddUserDeposit}>Submit</button>
                  <button onClick={this.handleOpenModal}>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
}

//считываю состояние
const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

//передача события, что я хочу делать
const mapDispatchToProps = dispatch => {
  return {
    user: (email, password, amount, id) => dispatch(addUserDeposite(email, password, amount, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Monetization)
