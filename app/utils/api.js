import 'whatwg-fetch';

export const baseUrl = 'http://localhost:8080/api';
const options = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
};

function parseJSON(response) {
  return response.json();
}

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  error.status = response.status;
  throw error;
}

export function post(u, body) {
  const url = `${baseUrl + u}`;
  const postOpt = {
    ...options,
    method: 'POST',
    body: JSON.stringify(body),
  };
  return fetch(url, postOpt)
    .then(checkStatus)
    .then(parseJSON);
}
