import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Bert } from 'meteor/themeteorchef:bert';
import { Categories } from '/imports/api/category/category';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class CategoryAdmin extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => Categories.remove(this.props.category._id, this.deleteCallback()),
        },
        {
          label: 'No',
          onClick: () => null,
        },
      ],
    });
  }

  deleteCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Delete failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Delete succeeded' });
    }
  }

  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.category.name}</Table.Cell>
          <Table.Cell>{this.props.category.icon}</Table.Cell>
          <Table.Cell>{this.props.category._id}</Table.Cell>
          <Table.Cell>
            <Link to={`/edit-category/${this.props.category._id}`}><Button>Edit</Button></Link>
            <Button color='red' basic onClick={this.handleClick}>Delete</Button>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
CategoryAdmin.propTypes = {
  category: PropTypes.object.isRequired,
};

export default withRouter(CategoryAdmin);
