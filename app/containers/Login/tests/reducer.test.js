import { fromJS } from 'immutable';
import loginReducer from '../reducer';

describe('loginReducer', () => {
  it('returns the initial state', () => {
    const initialState = {
      email: '',
      password: '',
      loginFailed: false,
    };
    expect(loginReducer(undefined, {})).toEqual(fromJS(initialState));
  });
});
