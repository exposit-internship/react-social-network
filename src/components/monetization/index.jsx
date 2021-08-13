import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUserDeposite } from '../../store/user/action'
import Modal from './modal'
import './modal/index.scss'

export class Monetization extends Component {
  state = {
    isOpenModal: false,
    depositeValue: ''
  }

  handleOpenModal = () => {
    this.setState(prevState => {
      return {
        isOpenModal: !prevState.isOpenModal
      }
    })
  }

  handleChange = event => {
    this.setState({
      depositeValue: event.target.value
    })
    console.log(event.target.value)
  }
  handleAddUserDeposit = () => {
    
    
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
                  value={this.state.depositeValue}
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
const mapStateToProps = props => {
  console.log('PROPS', props.user)
  const { user } = props.user
  console.log('USERRO', user)
  const { amount, email, firstName, id, password, secondName } = user
  console.log('USER DATA', amount, email, firstName, id, password, secondName)
  return {
    user: props.user
  }
}

//передача события, что я хочу делать
const mapDispatchToProps = dispatch => {
  return {
    user: () => dispatch(addUserDeposite())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Monetization)
