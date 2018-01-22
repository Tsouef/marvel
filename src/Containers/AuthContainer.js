import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  loginUser,
  emailChanged,
  passwordChanged,
  fetchUser
} from '../actions';

import Login from '../components/Login/Login';

class AuthContainer extends Component {
  componentDidMount() {
    this.props.fetchUser();
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

  render() {
    console.log('passe par là');
    return (
      <Login
        {...this.props}
        onEmailChange={this.onEmailChange}
        onPasswordChange={this.onPasswordChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading, user } = auth;
  return { email, password, error, loading, user };
};

export default connect(mapStateToProps, {
  loginUser,
  emailChanged,
  passwordChanged,
  fetchUser
})(AuthContainer);
