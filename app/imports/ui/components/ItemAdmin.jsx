import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Bert } from 'meteor/themeteorchef:bert';
import { Items } from '/imports/api/item/item';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class ItemAdmin extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure you want to do this?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => Items.remove(this.props.item._id, this.deleteCallback()),
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
          <Table.Cell><Link to={`/item/${this.props.item._id}`}>{this.props.item.title}</Link></Table.Cell>
          <Table.Cell>{this.props.item.price}</Table.Cell>
          <Table.Cell>{this.props.item._id}</Table.Cell>
          <Table.Cell>{this.props.item.owner}</Table.Cell>
          <Table.Cell>
            <Button><Link to={`/edit-item/${this.props.item._id}`}>Edit</Link></Button>
            <Button color='red' basic onClick={this.handleClick}>Delete</Button>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
ItemAdmin.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemAdmin;
