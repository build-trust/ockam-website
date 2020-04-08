import fetch from 'cross-fetch';

const toJson = resp => {
  const json = resp.json();
  return resp.ok
    ? json
    : json.then(err => {
        throw err;
      });
};

const apiFetch = (host, endpoint, { method = 'GET' } = {}) =>
  fetch(`${host}/${endpoint}`, { method }).then(toJson);

export default apiFetch;
