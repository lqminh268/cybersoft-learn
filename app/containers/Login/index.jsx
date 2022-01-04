import React, { useEffect } from 'react';
import {
  Alert,
  Box,
  Container,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';

import background from '../../assets/image/main-wallpaper.jpg';

import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';

import { init, reset, save, update } from '../../redux/actions';
import reducer from './reducer';
import saga from './saga';

import { MODULE_CONFIG } from './config';
import { createStructuredSelector } from 'reselect';
import { makeSelectCreateMain } from './selectors';
import { Link, withRouter } from 'react-router-dom';
import { ContentStyle } from './styled';
import { DEV } from '../../../config/common';
import palette from '../../theme/palette';

function Login(props) {
  const { main, onInit, onChange, onReset } = props;
  const { dataConfig, isLoading, isInitDone } = main;

  useEffect(() => {
    if (localStorage.getItem('saveUserName'))
      props.onChange({
        name: 'taiKhoan',
        value: JSON.parse(localStorage.getItem('saveUserName')).taiKhoan,
      });
    // console.log(JSON.parse(localStorage.getItem('saveUserName')).taiKhoan)
    if (isInitDone) {
      window.location.href = `${DEV}`;
    }
    return () => {
      onReset();
    };
  }, [isInitDone]);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container maxWidth="sm">
        <ContentStyle>
          <Paper
            elevation={0}
            sx={{
              padding: 3,
              textAlign: 'center',
              opacity: 0.75,
            }}
          >
            <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ color: palette.light.primary.dark }}
                >
                  Sign in to Cybersoft Learn.
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Enter your details below.
                </Typography>
              </Box>
              <Tooltip title="jwt">
                <Box>{/* <Logo /> */}</Box>
              </Tooltip>
            </Stack>
            <Alert
              severity="info"
              sx={{
                mb: 3,
                backgroundColor: 'transparent',
                justifyContent: 'center',
              }}
            >
              Use user : <strong>lq.minh268</strong> / password :
              <strong>&nbsp;Minh26081999</strong>
            </Alert>
            <LoginForm
              onInit={onInit}
              dataConfig={dataConfig}
              onChange={onChange}
              isLoading={isLoading}
            />
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Don’t have an account?&nbsp;
              <Link
                variant="subtitle2"
                // component={RouterLink}
                to="/register"
              >
                Get started
              </Link>
            </Typography>
          </Paper>
        </ContentStyle>
      </Container>
    </Box>
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
