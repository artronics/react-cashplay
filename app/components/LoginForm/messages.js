/*
 * LoginForm Messages
 *
 * This contains all the text for the LoginForm component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  email: {
    id: 'app.components.LoginForm.email',
    defaultMessage: 'Email',
  },
  password: {
    id: 'app.components.LoginForm.password',
    defaultMessage: 'Password',
  },
  login: {
    id: 'app.components.LoginForm.login',
    defaultMessage: 'Login',
  },
  error: {
    id: 'app.components.LoginForm.error',
    defaultMessage: 'Invalid email or password',
  },
});
