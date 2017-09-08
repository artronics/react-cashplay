import { fromJS } from 'immutable';
import { LOGIN, LOGIN_FAILURE, ON_EMAIL_CHANGE, ON_PASSWORD_CHANGE, } from './constants';

const initialState = fromJS({
  email: '',
  password: '',
  loginFailed: false,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state
        .set('loginFailed', false);
    case LOGIN_FAILURE:
      return state
        .set('loginFailed', true);
    case ON_EMAIL_CHANGE:
      return state
        .set('email', action.email)
        .set('loginFailed', false);
    case ON_PASSWORD_CHANGE:
      return state
        .set('password', action.password)
        .set('loginFailed', false);
    default:
      return state;
  }
}

export default loginReducer;
