import { injectAsyncReducer, injectAsyncSagas } from './utils/asyncInjectors';
import { account as accountAction } from './containers/App/actions';

export function redirectToLogin(store) {
  return (nextState, replace) => {
    if (store.getState().getIn(['global', 'account'])) {
      return;
    }
    const accountStr = window.localStorage.getItem('account');
    if (!store.getState().getIn(['global', 'account']) && accountStr) {
      const account = JSON.parse(accountStr);
      store.dispatch(accountAction(account));
      return;
    }
    if (!store.getState().getIn(['global', 'account']) && !accountStr) {
      replace({
        pathname: '/login',
        state: {nextPathname: nextState.location.pathname},
      });
    }
  };
}

export function redirectToApp(store) {
  const accountStr = window.localStorage.getItem('account');
  return (nextState, replace) => {
    if (store.getState().getIn(['global', 'account'])) {
      replace('/app');
    } else if (accountStr) {
      const account = JSON.parse(accountStr);
      store.dispatch(accountAction(account));
      replace('/app');
    }
  };
}

export function redirectToAppOrLogin(store) {
  return (nextState, replace) => {
    if (store.getState().getIn(['global', 'account'])) {
      replace('/app');
    } else {
      replace('/login');
    }
  };
}
/**
 * Helper for creating injectors
 */
export default function getHooks(store) {
  return {
    injectReducer: injectAsyncReducer(store),
    injectSagas: injectAsyncSagas(store),
    redirectToLogin: redirectToLogin(store),
    redirectToApp: redirectToApp(store),
    redirectToAppOrLogin: redirectToAppOrLogin(store),
  };
}
