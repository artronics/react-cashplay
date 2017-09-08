import { createSelector } from 'reselect';

/**
 * Direct selector to the login state domain
 */
const selectLoginDomain = () => (state) => state.get('login');

/**
 * Other specific selectors
 */
const makeSelectEmail = () => createSelector(
  selectLoginDomain(),
  (login) => login.get('email'),
);

const makeSelectPassword = () => createSelector(
  selectLoginDomain(),
  (login) => login.get('password'),
);


/**
 * Default selector used by Login
 */

const makeSelectLogin = () => createSelector(
  selectLoginDomain(),
  (substate) => substate.toJS(),
);

export default makeSelectLogin;
export {
  selectLoginDomain,
  makeSelectEmail,
  makeSelectPassword,
};
