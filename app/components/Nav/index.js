import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import messages from './messages';


export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  max-width: 20%;
`;

function Nav() {
  return (
    <NavWrapper>
      <FormattedMessage {...messages.header} />
    </NavWrapper>
  );
}

Nav.propTypes = {};

export default Nav;
