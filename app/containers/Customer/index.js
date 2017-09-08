import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Table from 'components/Table';
import Paginator from 'components/Paginator';
import ResourceToolbar from 'components/ResourceToolbar';
import makeSelectCustomer from './selectors';
import { recentlyAddedCustomers, recentlyAddedSelectedCustomer } from './actions';
import { columns } from './customer';

const page = {pageIndex: 2, pageSize: 10, total: 132};
const paginator = () => (<Paginator page={page}/>);
const toolbar = (disabled) => (<ResourceToolbar disabled={disabled}/>);

export class Customer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.dispatch(recentlyAddedCustomers());
  }

  render() {
    return (
      <div>
        <Table
          columns={columns}
          data={this.props.Customer.recentlyAdded}
          onRowSelection={(r) => this.props.handleRowSelection(r)}
          toolbar={toolbar(!this.props.Customer.recentlyAddedSelectedCustomer)}
          footer={paginator()}
        />
      </div>
    );
  }
}

Customer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  Customer: PropTypes.object.isRequired,
  recentlyAddedSelectedCustomer: PropTypes.object,
  handleRowSelection: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  Customer: makeSelectCustomer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleRowSelection: (selectedRow) =>
      selectedRow
        ? dispatch(recentlyAddedSelectedCustomer(selectedRow))
        : dispatch(recentlyAddedSelectedCustomer(null)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
