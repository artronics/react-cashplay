/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import { ACCOUNT, NETWORK_ERROR, DISMISS_NETWORK_ERROR, } from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  networkError: false,
  account: null,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ACCOUNT:
      return state
        .set('account', action.account);
    case NETWORK_ERROR:
      return state
        .set('networkError', true);
    case DISMISS_NETWORK_ERROR:
      return state
        .set('networkError', false);
    default:
      return state;
  }
}

export default appReducer;
