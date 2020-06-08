/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

function RouteWrapper({ component: Component, users, user, isPrivate, roleRequired, ...rest }) {
 const signedIn = false;
  if (isPrivate && signedIn) {
    return <Redirect to="/" />;
  }

  if (!isPrivate && signedIn) {
    return <Redirect to="/dashboard" />;
  }

  // if (!!roleRequired && !roleRequired.includes(role.toLowerCase())) {
  //   return <Redirect to="/403" />;
  // }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  roleRequired: PropTypes.string,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  roleRequired: '',
};

// const mapStateToProps = state => ({
//   users: state.currentUser,
//   user: state.user,
// });

export default RouteWrapper;
