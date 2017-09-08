import { createSelector } from 'reselect';

/**
 * Direct selector to the customer state domain
 */
const selectCustomerDomain = () => (state) => state.get('customer');

/**
 * Other specific selectors
 */
const makeSelectRecentlyAddedSelectedCustomer = () => createSelector(
  selectCustomerDomain(),
  (customer) => customer.get('recentlyAddedSelectedCustomer'),
);

/**
 * Default selector used by Customer
 */

const makeSelectCustomer = () => createSelector(
  selectCustomerDomain(),
  (substate) => substate.toJS(),
);

export default makeSelectCustomer;
export {
  selectCustomerDomain,
  makeSelectRecentlyAddedSelectedCustomer,
};
