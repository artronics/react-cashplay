import { takeLatest } from 'redux-saga/effects';

// export function* getRecentlyAddedCustomers() {
//   yield 'kir';
// }
// // Individual exports for testing
export function* recentlyAddedCustomers() {
//   yield takeLatest(RECENTLY_ADDED_CUSTOMERS, getRecentlyAddedCustomers());
}

export default [
  recentlyAddedCustomers,
];
