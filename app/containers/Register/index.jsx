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
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import background from '../../assets/image/main-wallpaper.jpg';
import { ContentStyle } from '../Login/styled';
import palette from '../../theme/palette';
import RegisterForm from './RegisterForm';

import { MODULE_CONFIG } from './config';

import { Link, withRouter, useHistory } from 'react-router-dom';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { makeSelectCreateMain } from './selectors';
import { init, reset, update } from '../../redux/actions';
import { createStructuredSelector } from 'reselect';

function Register(props) {
  const { main, onInit, onChange, onReset } = props;
  const { dataConfig, isLoading, isInitDone } = main;
  const history = useHistory();
  useEffect(() => {
    if (isInitDone) {
      history.push('/login');
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
                  Get started absolutely FREE.
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Free forever. No credit card needed.
                </Typography>
              </Box>
              <Tooltip title="jwt">
                <Box>{/* <Logo /> */}</Box>
              </Tooltip>
            </Stack>
            <RegisterForm
              onInit={onInit}
              dataConfig={dataConfig}
              onChange={onChange}
              isLoading={isLoading}
            />
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Already have an account?&nbsp;
              <Link
                variant="subtitle2"
                // component={RouterLink}
                to="/login"
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
Register.propTypes = {
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
)(Register);
