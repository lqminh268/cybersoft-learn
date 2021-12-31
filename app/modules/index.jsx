import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import routes from './routes';
import reducer from './reducer';
import { PrivateRoute } from '../components/Guard';
import injectReducer from '../utils/injectReducer';

function index() {
  const showContentMain = () => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map(route => {
        if (route.private) {
          return (
            <PrivateRoute
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          );
        }
        return (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };

  return <>{showContentMain()}</>;
}

const withReducer = injectReducer({ key: 'homepage', reducer });

export default compose(
  withRouter,
  withReducer,
)(index);
