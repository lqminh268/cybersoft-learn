import axios from 'axios';
import { URL_API } from '../../config/common';
import { getExpires, getToken } from './localStorage';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}

const serviceUnavailbale = err => {
  const { response } = err;
  // const responseTmp = JSON.parse(response);
  if (response.code === 400) {
    return response;
  }
  if (
    response.code === 401 &&
    response.message === 'Please authenticate'
  ) {
    window.location.href = `${window.location.origin}/login`;
  }

  return {
    status: true,
    data: {
      code: 503,
      message: 'Service Unavailable',
    },
  };
};

export function callApiWithAuth(endpoint, method = 'GET', body) {
  // const apiPid = getPortalId();
  // const apiToken = getToken();

  const token = getToken();
  const expires = getExpires();

  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    // token: apiToken,
  };

  return axios({
    method,
    url: `${URL_API}/${endpoint}`,
    data: body,
    headers,
    params: {
      token,
      expires,
    },
  }).catch(err => {
    // addMessageToQueue({
    //   path: 'app/utils/request.js',
    //   func: 'callApiWithAuth',
    //   data: err.stack,
    // });
    return serviceUnavailbale(err.request);
  });
}

export function callApi(endpoint, method = 'GET', body) {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
  };

  return axios({
    method,
    url: `${URL_API}/${endpoint}`,
    data: body,
    headers,
  }).catch(err => {
    // addMessageToQueue({
    //   path: 'app/utils/request.js',
    //   func: 'callApiWithAuth',
    //   data: err.stack,
    // });
    return serviceUnavailbale(err.request);
  });
}
