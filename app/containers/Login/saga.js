import { call, delay, put, select, takeLatest } from 'redux-saga/effects';
import { dashboardAddNoti, initDone } from '../../redux/actions';
import ReduxTypes from '../../redux/constants';

import authService from '../../services/auth';
import { MODULE_CONFIG } from './config';
import { makeSelectCreateMain } from './selectors';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';

const PREFIX = MODULE_CONFIG.key;

/* ---------------------------- workerCommonSaga ---------------------------- */
export default function* workerCommonSaga() {
  yield takeLatest(`${PREFIX}${ReduxTypes.INIT}`, handleSave);
}

/* --------------------------------- SUBMIT --------------------------------- */
function* handleSave() {
  // info reducer con Matching File
  const reducerMain = yield select(makeSelectCreateMain());
  const { taiKhoan, matKhau, checkbox } = reducerMain.dataConfig;
  const params = {
    data: {
      taiKhoan: taiKhoan.value,
      matKhau: matKhau.value,
    },
  };
  const res = yield call(authService.setting.login, params);
  if (res.code === 200) {
    const saveUserName = {
      taiKhoan: res.data.taiKhoan,
      isSave: checkbox.value,
    };
    setLocalStorage('auth', res.data.maLoaiNguoiDung);
    setLocalStorage('token', res.data.accessToken);
    if (checkbox.value) {
      setLocalStorage('saveUserName', saveUserName);
    } else if (getLocalStorage('saveUserName'))
      localStorage.removeItem('saveUserName');
    yield put(
      dashboardAddNoti({ severity: 'success', content: 'Login Success' }),
    );
    yield delay(1000);
    yield put(initDone(PREFIX, { data: res.data }));
  } else if (res.code === 500) {
    yield put(
      dashboardAddNoti({
        severity: 'error',
        content: 'Wrong username or password',
      }),
    );
    yield put(initDone(`${PREFIX}@@ERROR`));
  }
}
