import React from 'react';
import styled from 'styled-components';
import { FormattedMessage, } from 'react-intl';
import Snackbar from 'material-ui/Snackbar';
import { dismissNetworkError } from './actions';
import messages from './messages';
import { errorColor } from '../../style-variables';


const AppWrapper = styled.div`
`;
const NetworkErrorWrapper = styled.span`
  color: ${errorColor};
`;
const networkErrorMsg = (
  <NetworkErrorWrapper><i className="fa fa-warning"></i>
    <FormattedMessage {...messages.networkError} /></NetworkErrorWrapper>
);
const closeSnackbar = (dispatch) => () => dispatch(dismissNetworkError());

export const Theme = (props) => (
  <AppWrapper>
    {React.Children.toArray(props.children)}
    <Snackbar open={props.networkError} message={networkErrorMsg} onRequestClose={closeSnackbar(props.dispatch)}/>
  </AppWrapper>

);

Theme.propTypes = {
  dispatch: React.PropTypes.func,
  children: React.PropTypes.node,
  networkError: React.PropTypes.bool,
};
