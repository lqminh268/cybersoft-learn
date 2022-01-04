import { call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { dashboardAddNoti, initDone, updateDone } from '../../redux/actions';
import ReduxTypes from '../../redux/constants';

import authService from '../../services/auth';
import { MODULE_CONFIG } from './config';
import { makeSelectCreateMain } from './selectors';
const PREFIX = MODULE_CONFIG.key;

/* ---------------------------- workerCommonSaga ---------------------------- */
export default function* workerCommonSaga() {
  yield takeLatest(`${PREFIX}${ReduxTypes.INIT}`, handleSave);
}
/* --------------------------------- SUBMIT --------------------------------- */
function* handleSave(action, args) {
  // info reducer con Matching File
  const reducerMain = yield select(makeSelectCreateMain());
  const { taiKhoan, hoTen, email, matKhau, soDT } = reducerMain.dataConfig;
  const params = {
    data: {
      taiKhoan: taiKhoan.value,
      hoTen: hoTen.value.trim(),
      soDT: soDT.value,
      email: email.value.trim(),
      matKhau: matKhau.value.trim(),
      maNhom: 'GP01'
    },
  };
  // if (password.value !== confirmPassword.value) {
  //     yield put(
  //         dashboardAddNoti({ severity: 'error', content: 'Confirm Password is not match' }),
  //     );
  //     yield put(initDone(`${PREFIX}@@ERROR`));
  // } else {
  const res = yield call(authService.setting.register, params);
  if (res.code === 200) {
    yield put(
      dashboardAddNoti({
        severity: 'success',
        content: 'Register successfully',
      }),
    );
    yield delay(1000);

    yield put(initDone(PREFIX, { data: res.data }));
  } else if (res.code === 500) {
    yield put(
      dashboardAddNoti({ severity: 'error', content: 'Email already taken' }),
    );
    yield put(initDone(`${PREFIX}@@ERROR`));
    // }
  }
}
