import React from 'react';
import getHooks from './hooks';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};


const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

const appRoutes = (injectReducer, injectSagas) => [
  {
    path: '/app/customer',
    name: 'customer',
    getComponent(nextState, cb) {
      const importModules = Promise.all([
        import('containers/Customer/reducer'),
        import('containers/Customer/sagas'),
        import('containers/Customer'),
      ]);

      const renderRoute = loadModule(cb);

      importModules.then(([reducer, sagas, component]) => {
        injectReducer('customer', reducer.default);
        injectSagas(sagas.default);
        renderRoute(component);
      });

      importModules.catch(errorLoading);
    },
  },
];
export default function createRoutes(store) {
  const {injectReducer, injectSagas, redirectToLogin, redirectToApp, redirectToAppOrLogin} = getHooks(store);

  return [
    {
      onEnter: redirectToAppOrLogin,
      path: '/',
      home: 'home',
      exact: true,
      component: () => <p> make Redirect to work </p>,
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   getComponent(nextState, cb) {
    //     const importModules = Promise.all([
    //       import('containers/HomePage/reducer'),
    //       import('containers/HomePage/sagas'),
    //       import('containers/HomePage'),
    //     ]);
    //
    //     const renderRoute = loadModule(cb);
    //
    //     importModules.then(([reducer, sagas, component]) => {
    //       injectReducer('home', reducer.default);
    //       injectSagas(sagas.default);
    //
    //       renderRoute(component);
    //     });
    //
    //     importModules.catch(errorLoading);
    //   },
    // }, {
    {
      onEnter: redirectToLogin,
      path: '/app',
      name: 'cashplay',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Cashplay/reducer'),
          import('containers/Cashplay/sagas'),
          import('containers/Cashplay'),
        ]);
        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('cashplay', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      childRoutes: appRoutes(injectReducer, injectSagas),
    }, {
      onEnter: redirectToApp,
      path: '/login',
      name: 'login',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Login/reducer'),
          import('containers/Login/sagas'),
          import('containers/Login'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('login', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/customer',
      name: 'customer',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Customer/reducer'),
          import('containers/Customer/sagas'),
          import('containers/Customer'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('customer', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}

