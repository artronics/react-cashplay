import 'whatwg-fetch';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { checkStatus, baseUrl } from 'utils/api';
import { LOGIN } from './constants';
import { loginFailure } from './actions';
import { networkError, account as accountAction } from '../App/actions';
import { makeSelectEmail, makeSelectPassword } from './selectors';

function request(url, opt) {
  return fetch(`${baseUrl + url}`, opt)
    .then(checkStatus);
}

export function* getLogin() {
  const url = '/login';
  const email = yield select(makeSelectEmail());
  const password = yield select(makeSelectPassword());
  const options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({email, password}),
  };
  try {
    const response = yield call(request, url, options);
    const account = yield call((res) => res.json(), response);

    const token = response.headers.get('authorization');
    account.token = token;
    account.loggedInUser = account.users.filter((u) => u.email === email)[0];
    window.localStorage.setItem('account', JSON.stringify(account));

    yield put(accountAction(account));
    yield put(push('/app'));
  } catch (error) {
    if (error.status === 401) {
      yield put(loginFailure());
    } else {
      yield put(networkError());
    }
  }
}

export function* login() {
  yield takeLatest(LOGIN, getLogin);
}

export default [
  login,
];
