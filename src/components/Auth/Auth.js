import React, { Component } from 'react';
import firebase, { auth } from '../../config/firebase.js';
import { connect } from 'react-redux';
import {
  loginUser,
  emailChanged,
  passwordChanged,
  fetchUser
} from '../../actions';

class Auth extends Component {
  componentDidMount() {
    // this.props.fetchUser();
  }

  onEmailChange = e => {
    this.props.emailChanged(e.target.value);
  };

  onPasswordChange = e => {
    this.props.passwordChanged(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  };

  renderButton() {
    if (this.props.loading) {
      <button className="btn waves-effect waves-light">
        Loading
        <i className="material-icons right">more_horiz</i>
      </button>;
    }

    return (
      <button
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
        onClick={this.handleSubmit}
      >
        Sign In
        <i className="material-icons right">send</i>
      </button>
    );
  }
  render() {
    return (
      <div>
        <div className="container">
          <h5>Auth Page</h5>
          <input
            name="email"
            onChange={this.onEmailChange}
            type="text"
            placeholder="Email"
            value={this.props.email}
          />
          <input
            name="password"
            onChange={this.onPasswordChange}
            type="password"
            placeholder="Password"
            value={this.props.password}
          />
          {this.renderButton()}

          <span> {this.props.error}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  loginUser,
  emailChanged,
  passwordChanged,
  fetchUser
})(Auth);
