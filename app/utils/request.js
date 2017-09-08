import 'whatwg-fetch';

export const baseUrl = 'http://localhost:8080';
const options = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
};

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  error.status = response.status;
  throw error;
}

export default function request(url, opt) {
  return fetch(`${baseUrl + url}`, opt)
    .then(checkStatus)
    .then(parseJSON);
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
