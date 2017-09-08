import { createSelector } from 'reselect';

/**
 * Direct selector to the cashplay state domain
 */
const selectCashplayDomain = () => (state) => state.get('cashplay');

// const makeSelectCashplay = (state) => state.get('cashplay');

/**
 * Other specific selectors
 */

const selectAccount = (state) => state.get('account');
const makeSelectAccount = () => createSelector(
  // makeSelectCashplay,
  // selectAccount,
  selectCashplayDomain(),
  // (cashplay) => cashplay().get('account'),
  // (cashplay) => cashplay('account'),
  (cashplay) => cashplay.get('account'),
);

/**
 * Default selector used by Cashplay
 */

const makeSelectCashplay = () => createSelector(
  selectCashplayDomain(),
  (substate) => substate.toJS()
);

export default selectCashplayDomain;
export {
  makeSelectCashplay,
  selectCashplayDomain,
  makeSelectAccount,
};
