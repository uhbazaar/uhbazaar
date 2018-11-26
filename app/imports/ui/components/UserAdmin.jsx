import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Bert } from 'meteor/themeteorchef:bert';
import { Users } from '/imports/api/user/user';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class UserAdmin extends React.Component {

  handleClick() {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => Users.remove(this.props.user._id, this.deleteCallback()),
        },
        {
          label: 'No',
          onClick: () => console.log('No'),
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
          <Table.Cell>{this.props.user.firstName} {this.props.user.lastName}</Table.Cell>
          <Table.Cell>{this.props.user.username}</Table.Cell>
          <Table.Cell>{this.props.user._id}</Table.Cell>
          <Table.Cell>{this.props.user.image}</Table.Cell>
          <Table.Cell>{this.props.user.description}</Table.Cell>
          <Table.Cell>
            <Button><Link to={`/edit-user/${this.props.user._id}`}>Edit</Link></Button>
            <Button color='red' basic onClick={this.handleClick}>Delete</Button>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
UserAdmin.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserAdmin;
