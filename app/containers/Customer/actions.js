import {
  RECENTLY_ADDED_CUSTOMERS,
  RECENTLY_ADDED_CUSTOMERS_FAILURE,
  RECENTLY_ADDED_CUSTOMERS_SUCCESS,
  RECENTLY_ADDED_SELECT_CUSTOMERS,
} from './constants';

export function recentlyAddedCustomers() {
  return {
    type: RECENTLY_ADDED_CUSTOMERS,
  };
}

export function recentlyAddedCustomersSuccess(customers) {
  return {
    type: RECENTLY_ADDED_CUSTOMERS_SUCCESS,
    customers,
  };
}

export function recentlyAddedCustomersFailure() {
  return {
    type: RECENTLY_ADDED_CUSTOMERS_FAILURE,
  };
}

export function recentlyAddedSelectedCustomer(selectedCustomer) {
  return {
    type: RECENTLY_ADDED_SELECT_CUSTOMERS,
    selectedCustomer,
  };
}
