import fetch from 'cross-fetch';

import config  from '../../config';

const { api: { leverUrl } } = config;

const toJson = resp => {
  const json = resp.json();
  if (resp.status >= 200 && resp.status < 300) {
    return json;
  }
  return json.then(err => {throw err;});
};

const apiFetch = (endpoint, { method = 'GET' } = {}) =>
  fetch(`${leverUrl}/${endpoint}`, { method }).then(toJson);

export default apiFetch;
