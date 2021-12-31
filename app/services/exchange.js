/* eslint-disable arrow-body-style */
/* eslint-disable prefer-destructuring */
import { callApiWithAuth } from '../utils/request';
import { ENDPOINT } from '../../config/common';
import { getEntriesV2 } from './utils';

const API = {
  setting: {
    create: params => {
      // return params;
      return callApiWithAuth(`${ENDPOINT.exchange}`, 'POST', params.data).then(
        res => {
          return getEntriesV2(res, []);
        },
      );
    },
  },
  list: {
    get: params => {
      return callApiWithAuth(`${ENDPOINT.exchange}/list`, 'POST', params.data).then(
        res => {
          return getEntriesV2(res, []);
        },
      );
    },
  },
};

export default API;
