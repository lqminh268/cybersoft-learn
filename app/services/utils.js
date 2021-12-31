/* eslint-disable radix */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */

import { safeParse } from '../utils/common';

export function getEntriesV2(res, def) {
  if (typeof res !== 'undefined' && res.status === 400) {
    const code = safeParse(res.code, 500);
    const message = safeParse(res.message, '');
    return {
      code,
      message,
      data: def,
    };
  }
  if (typeof res !== 'undefined' && res.status === 200) {
    const code = safeParse(res.data.data.code, 500);
    let message = safeParse(res.data.data.message, '');
    let data = def;
    if (code === 200) {
      data = safeParse(res.data.data.entries, {});
      message = 'SUCCESS';
    } else {
      data = safeParse(res.data.data.entries, {});
      message = 'ERRORS';
    }
    return {
      code,
      message,
      data,
    };
  }

  return {
    code: 500,
    message: 'INTERNAL_SERVER_ERROR',
    def,
  };
}
