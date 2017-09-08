import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { FormattedMessage, } from 'react-intl';
import TextFiled from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Card from 'components/Card';
import messages from './messages';
import { overlayBackgroundColor, errorColor } from '../../style-variables';

const FormWrapper = styled.div`
  position: absolute;
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: ${overlayBackgroundColor};
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  border-radius: 5px !important;
`;

const ErrorWrapper = styled.p`
  color: ${errorColor}
`;

function LoginForm(props) {
  const email = <FormattedMessage {...messages.email} />;
  const password = <FormattedMessage {...messages.password} />;
  const login = <FormattedMessage {...messages.login} />;
  const error = (props.loginFailed
    ? <ErrorWrapper><FormattedMessage {...messages.error} /></ErrorWrapper>
    : <ErrorWrapper>&nbsp;</ErrorWrapper>);
  const form = (
    <Form>
      <TextFiled floatingLabelText={email} type="email" onKeyUp={(e) => props.onEmail(e.target.value)} required/>
      <br/>
      <TextFiled
        floatingLabelText={password} type="password" onKeyUp={(e) => props.onPassword(e.target.value)} required
      />
      {error}
    </Form>
  );
  const actions = (<span><Button raised label={login} type="submit" primary={true} onClick={props.onLogin}/></span>);

  return (
    <FormWrapper>
      <Card cardTitle={'Login'} cardText={form} cardActions={actions}/>
    </FormWrapper>
  );
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onEmail: PropTypes.func.isRequired,
  onPassword: PropTypes.func.isRequired,
  loginFailed: PropTypes.bool.isRequired,
};

export default LoginForm;
