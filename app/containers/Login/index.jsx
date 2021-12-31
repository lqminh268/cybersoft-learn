import React from 'react';
import { Container } from '@mui/material';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';

import { init, reset, update } from '../../redux/actions';
import reducer from './reducer';
import saga from './saga';

import { MODULE_CONFIG } from './config';
import { createStructuredSelector } from 'reselect';
import { makeSelectCreateMain } from './selectors';
import { Link, withRouter } from 'react-router-dom';

function Login(props) {
  const { main, onInit, onChange, onReset } = props;
  const { dataConfig, isLoading, isInitDone } = main;

  return (
    <LoginForm
      onInit={onInit}
      dataConfig={dataConfig}
      onChange={onChange}
      isLoading={isLoading}
    />
  );
}

const withReducer = injectReducer({ key: MODULE_CONFIG.key, reducer });
const withSaga = injectSaga({ key: MODULE_CONFIG.key, saga });

/* ----------------------------- STATE TO PROPS ----------------------------- */
const mapStateToProps = createStructuredSelector({
  main: makeSelectCreateMain(),
});

function mapDispatchToProps(dispatch) {
  return {
    onInit: value => dispatch(init(`${MODULE_CONFIG.key}`, value)),
    onChange: value =>
      dispatch(update(`${MODULE_CONFIG.key}@@ON_CHANGE_DATA_CONFIG`, value)),
    onReset: params => {
      dispatch(reset(MODULE_CONFIG.key, params));
    },
  };
}

/* -------------------------------- PROPTYPES ------------------------------- */
Login.propTypes = {
  main: PropTypes.object,
  onChange: PropTypes.func,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(
  withRouter,
  withReducer,
  withSaga,
  withConnect,
)(Login);
