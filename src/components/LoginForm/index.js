import './index.css'
import {Component} from 'react'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isSubmitError: false,
    errorMessage: '',
  }

  onUpdateUserName = event => {
    this.setState({username: event.target.value})
  }

  onUpdatePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  showErrorMessage = errorMsg => {
    this.setState({isSubmitError: true, errorMessage: errorMsg})
  }

  formSubmited = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.showErrorMessage(data.error_msg)
    }
  }

  render() {
    const {username, password, isSubmitError, errorMessage} = this.state

    return (
      <div className="login-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="website-logo"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <form className="form-container" onSubmit={this.formSubmited}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="website-logo-lg"
          />
          <div className="label-input-container">
            <label className="label-text" htmlFor="userName">
              USERNAME
            </label>
            <input
              id="userName"
              type="text"
              className="input-box"
              value={username}
              onChange={this.onUpdateUserName}
              placeholder="Username"
            />
          </div>
          <div className="label-input-container">
            <label className="label-text" htmlFor="password">
              PASSWORD
            </label>
            <input
              id="password"
              type="passWord"
              className="input-box"
              value={password}
              onChange={this.onUpdatePassword}
              placeholder="Password"
            />
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
          {isSubmitError && <p className="error-msg">{errorMessage}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
