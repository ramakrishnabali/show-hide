// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onClickFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onClickLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="appContainer">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttonContainer">
          <div className="firstNameContainer">
            <button
              type="button"
              className="firstName"
              onClick={this.onClickFirstName}
            >
              Show/Hide Firstname
            </button>
            {firstName ? (
              <div className="nameContainer">
                <p className="name">Joe</p>
              </div>
            ) : null}
          </div>

          <div className="firstNameContainer">
            <button
              type="button"
              className="firstName"
              onClick={this.onClickLastName}
            >
              Show/Hide LastName
            </button>
            {lastName ? (
              <div className="nameContainer">
                <p className="name">Jonas</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
