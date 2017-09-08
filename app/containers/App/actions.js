import { ACCOUNT, NETWORK_ERROR, DISMISS_NETWORK_ERROR } from './constants';

export function account(account) {
  return {
    type: ACCOUNT,
    account,
  };
}

export function networkError() {
  return {
    type: NETWORK_ERROR,
  };
}

export function dismissNetworkError() {
  return {
    type: DISMISS_NETWORK_ERROR,
  };
}
