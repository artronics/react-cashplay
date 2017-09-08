import { LOGIN, LOGIN_FAILURE, ON_EMAIL_CHANGE, ON_PASSWORD_CHANGE, } from './constants';

export function login(email, password) {
  return {
    type: LOGIN,
    email,
    password,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

export function email(email) {
  return {
    type: ON_EMAIL_CHANGE,
    email,
  };
}

export function password(password) {
  return {
    type: ON_PASSWORD_CHANGE,
    password,
  };
}
