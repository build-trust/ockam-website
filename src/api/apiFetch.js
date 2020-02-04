import fetch from 'cross-fetch';

import config from '../../config';

const {
  api: { leverUrl },
} = config;

const toJson = resp => {
  const json = resp.json();
  return resp.ok
    ? json
    : json.then(err => {
        throw err;
      });
};

const apiFetch = (endpoint, { method = 'GET' } = {}) =>
  fetch(`${leverUrl}/${endpoint}`, { method }).then(toJson);

export default apiFetch;
