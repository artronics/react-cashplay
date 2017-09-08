import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectAccount = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('account'),
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectNetworkError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('networkError'),
);

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  makeSelectAccount,
  makeSelectLoading,
  makeSelectNetworkError,
  makeSelectLocationState,
};
