import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { makeSelectNetworkError } from './selectors';
import { Theme } from './theme';

export function App(props) {
  return (
    <Theme {...props} />
  );
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  networkError: makeSelectNetworkError(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
