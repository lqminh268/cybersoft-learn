import { LOGIN, REGISTER } from '../../config/common';
import { getEntriesV2 } from './utils';
import { callApi } from '../utils/request';

const API = {
  setting: {
    login: params =>
      callApi(`${LOGIN}`, 'POST', params.data).then(res =>
        getEntriesV2(res, []),
      ),
    register: params =>
      callApi(`${REGISTER}`, 'POST', params.data)
        .then(res => getEntriesV2(res, [])),
  },
};

export default API;
