import React from 'react';
import Button from '../Button/Button';
import TextInput from '../Input/TextInput';
const Login = ({
  onEmailChange,
  handleSubmit,
  email,
  onPasswordChange,
  password,
  error
}) => {
  return (
    <div className="container">
      <h5>Auth Page</h5>
      <TextInput
        name="email"
        onChange={onEmailChange}
        type="email"
        value={email}
        placeholder="Email"
      />
      <TextInput
        name="password"
        onChange={onPasswordChange}
        type="password"
        value={password}
        placeholder="Password"
      />
      <Button
        className="btn waves-effect waves-light"
        onClick={handleSubmit}
        type="submit"
      >
        Sign In
        <i className="material-icons right">send</i>
      </Button>
      <span>{error}</span>
    </div>
  );
};

export default Login;
