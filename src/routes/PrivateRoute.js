import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = rest;
  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return { user };
};

// export default connect(mapStateToProps, {})(PrivateRoute);
// export default withRouter(connect(mapStateToProps)(PrivateRoute));
export default connect(mapStateToProps, null, null, {
  pure: false
})(PrivateRoute);
