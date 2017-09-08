import { fromJS } from 'immutable';
import { RECENTLY_ADDED_CUSTOMERS_SUCCESS, RECENTLY_ADDED_SELECT_CUSTOMERS, } from './constants';

const initialState = fromJS({
  recentlyAdded: [{id: 1, firstName: 'jalal', lastName: 'hosseini'}, {id: 20, firstName: 'kir', lastName: 'gholi'}],
  recentlyAddedSelectedCustomer: null,
});

function customerReducer(state = initialState, action) {
  switch (action.type) {
    case RECENTLY_ADDED_CUSTOMERS_SUCCESS:
      return state
        .set('recentlyAdded', action.customers);
    case RECENTLY_ADDED_SELECT_CUSTOMERS:
      return state
        .set('recentlyAddedSelectedCustomer', action.selectedCustomer);
    default:
      return state;
  }
}

export default customerReducer;
