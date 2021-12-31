/* eslint-disable arrow-body-style */
/* eslint-disable prefer-destructuring */
import { callApiWithAuth } from '../utils/request';
import { ENDPOINT } from '../../config/common';
import { getEntriesV2 } from './utils';

const API = {
  setting: {
    create: params => {
      // return params;
      return callApiWithAuth(`${ENDPOINT.coin}`, 'POST', params.data).then(
        res => {
          return getEntriesV2(res, []);
        },
      );
    },
    getById: params => {
      // return params;
      return callApiWithAuth(`${ENDPOINT.coin}/${params.id}`, 'GET').then(
        res => {
          return getEntriesV2(res, []);
        },
      );
    },
    updateById: params => {
      // return params;
      return callApiWithAuth(
        `${ENDPOINT.coin}/${params.id}`,
        'PATCH',
        params.body,
      ).then(res => {
        return getEntriesV2(res, []);
      });
    },
  },
  list: {
    get: params => {
      return callApiWithAuth(`${ENDPOINT.coin}/list`, 'POST', params.data).then(
        res => {
          return getEntriesV2(res, []);
        },
      );
    },
  },
};

export default API;
