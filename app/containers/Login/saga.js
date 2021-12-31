import { call, delay, put, select, takeLatest } from 'redux-saga/effects';
import { dashboardAddNoti, initDone } from '../../redux/actions';
import ReduxTypes from '../../redux/constants';

import authService from '../../services/auth';
import { MODULE_CONFIG } from './config';
import { makeSelectCreateMain } from './selectors';
import { setLocalStorage } from '../../utils/localStorage';

const PREFIX = MODULE_CONFIG.key;

/* ---------------------------- workerCommonSaga ---------------------------- */
export default function* workerCommonSaga() {
  yield takeLatest(`${PREFIX}${ReduxTypes.INIT}`, handleSave);
}

/* --------------------------------- SUBMIT --------------------------------- */
function* handleSave() {
  // info reducer con Matching File
  const reducerMain = yield select(makeSelectCreateMain());
  const { taiKhoan, matKhau } = reducerMain.dataConfig;
  const params = {
    data: {
      taiKhoan: taiKhoan.value,
      matKhau: matKhau.value,
    },
  };
  const res = yield call(authService.setting.login, params);
  if (res.code === 200) {
    setLocalStorage('auth', res.data.role);
    setLocalStorage('token', res.data.tokens.token);
    setLocalStorage('expires', res.data.tokens.expires);
    // localStorage.setItem('data', JSON.stringify(res.data));
    yield put(
      dashboardAddNoti({ severity: 'success', content: 'Login Success' }),
    );
    yield delay(1000);
    yield put(initDone(PREFIX, { data: res.data }));
  } else if (res.code === 500) {
    yield put(
      dashboardAddNoti({
        severity: 'error',
        content: 'Wrong email or password',
      }),
    );
    yield put(initDone(`${PREFIX}@@ERROR`));
  }
}
