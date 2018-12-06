import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Bert } from 'meteor/themeteorchef:bert';
import { Reports } from '/imports/api/report/report';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class ReportAdmin extends React.Component {

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
          onClick: () => Reports.remove(this.props.report._id, this.deleteCallback()),
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
          <Table.Cell>{this.props.report.name}</Table.Cell>
          <Table.Cell>{this.props.report.issue}</Table.Cell>
          <Table.Cell>{this.props.report.createdAt.toLocaleDateString('en-US')}</Table.Cell>
          <Table.Cell>{this.props.report._id}</Table.Cell>
          <Table.Cell>{this.props.report.progress}</Table.Cell>
          <Table.Cell>{this.props.report.description}</Table.Cell>
          <Table.Cell>
            <Button><Link to={`/edit-report/${this.props.report._id}`}>Edit</Link></Button>
            <Button color='red' basic onClick={this.handleClick}>Delete</Button>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
ReportAdmin.propTypes = {
  report: PropTypes.object.isRequired,
};

export default ReportAdmin;
