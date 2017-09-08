import { fromJS } from 'immutable';
import { LOAD_ACCOUNT, } from './constants';

const initialState = fromJS({
  loggedIn: false,
  loading: false,
  error: false,
  account: null,
});

function cashplayReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ACCOUNT:
      return state;
    default:
      return state;
  }
}

export default cashplayReducer;
