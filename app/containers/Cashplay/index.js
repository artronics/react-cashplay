import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import Menu, { MenuItem } from 'material-ui/Menu';
import Nav from 'components/Nav';
import makeSelectCashplay from './selectors';
import { makeSelectAccount } from '../App/selectors';

const AppWrapper = styled.div`
background-color:red;
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
`;

const LayoutWrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  width: 100%;
`;
const styles = {
  flex: {
    flex: 1,
  },
};
export class Cashplay extends React.Component { // eslint-disable-line react/prefer-stateless-function
  classes = this.props.classes;
  componentWillMount() {
  }

  componentDidMount() {
  }

  // does not work throw warning
  menu = (
    <Menu
      // iconButtonElement={<IconButton><MoreVertIcon color="red"/></IconButton>}
      iconButtonElement={<span>kir</span>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      iconStyle={{fill: 'rgba(0,0,0,0)'}}
    >
      <MenuItem primaryText={'kir'}/>
    </Menu>);

  render() {
    return (
      <AppWrapper>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="inherit" className={this.classes.flex}>Cashplay</Typography>
            <Button color="contrast"><span
              className="art-capitalize">{this.props.account.loggedInUser.name}</span></Button>
          </Toolbar>
        </AppBar>
        <LayoutWrapper>
          <Nav/>
          <ContentWrapper>
            {this.props.children}
          </ContentWrapper>
          <div>receipt</div>
        </LayoutWrapper>
      </AppWrapper>
    );
  }
}

Cashplay.muiName = 'Menu';

Cashplay.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  children: React.PropTypes.node,
  Cashplay: PropTypes.object,
  account: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  account: makeSelectAccount(),
  Cashplay: makeSelectCashplay(),
});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Cashplay));
