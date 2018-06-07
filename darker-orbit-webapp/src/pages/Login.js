import React, { Component } from 'react'
import LoginPanel from '../components/LoginPanel';

export default class Login extends Component {
  attemptLogin = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <section className="login-page">
        <LoginPanel onLogin={this.attemptLogin} />
      </section>
    )
  }
}
