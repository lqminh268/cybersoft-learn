/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route } from 'react-router-dom';
import { validateAuthentication } from '../../utils/localStorage';

const validate = props => {
  return validateAuthentication();
};

function goLoginPage() {
  console.log('goLoginPage');
  window.location.href = `${window.location.origin}/login`;
}

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => <Component {...props} />
      // validate(props) ? <Component {...props} /> : goLoginPage()
    }
  />
);
