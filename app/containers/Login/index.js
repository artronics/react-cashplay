import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import LoginForm from 'components/LoginForm';
import makeSelectLogin from './selectors';
import { email, password, login } from './actions';

export class Login extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    console.log('kkir', this.props.Login);
  }

  onEmailChange = (e) => this.props.dispatch(email(e));
  onPassChane = (p) => this.props.dispatch(password(p));
  onLogin = () => this.props.dispatch(login(this.props.Login.email, this.props.Login.password));
  render() {
    return (
      <div>
        <LoginForm
          onLogin={this.onLogin}
          onEmail={this.onEmailChange} onPassword={this.onPassChane}
          loginFailed={this.props.Login.loginFailed}
        />
        login works
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  Login: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
