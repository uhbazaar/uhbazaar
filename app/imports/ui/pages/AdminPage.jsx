import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader, Accordion, Icon } from 'semantic-ui-react';
import { Items } from '/imports/api/item/item';
import { Users } from '/imports/api/user/user';
import { Categories } from '/imports/api/category/category';
import { Reports } from '/imports/api/report/report';
import ItemAdmin from '/imports/ui/components/ItemAdmin';
import ReportAdmin from '/imports/ui/components/ReportAdmin';
import UserAdmin from '/imports/ui/components/UserAdmin';
import CategoryAdmin from '/imports/ui/components/CategoryAdmin';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import AddCategory from '../components/AddCategory';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListStuffAdmin extends React.Component {

  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const { activeIndex } = this.state;
    return (
        <Container>
          <Header as="h2" textAlign="center">Admin Page</Header>
          <Accordion fluid styled exclusive={false}>
            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
              <Header as="h3" textAlign="left"><Icon name='dropdown'/>Reports</Header>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Report</Table.HeaderCell>
                    <Table.HeaderCell>Issue</Table.HeaderCell>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Progress</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Edit/Delete</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {_.sortBy(_.reject(this.props.reports, function (report) {
                    return report.progress == 'closed'
                  }), 'progress').map((report) => <ReportAdmin key={report._id}
                                                               report={report}/>)}
                </Table.Body>
              </Table>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
              <Header as="h3" textAlign="left"><Icon name='dropdown'/>Items For Sale</Header>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Item</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Owner</Table.HeaderCell>
                    <Table.HeaderCell>Edit/Delete</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {_.sortBy(this.props.items, 'price').map((item) => <ItemAdmin key={item._id} item={item}/>)}
                </Table.Body>
              </Table>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
              <Header as="h3" textAlign="left"><Icon name='dropdown'/>Categories</Header>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Category</Table.HeaderCell>
                    <Table.HeaderCell>Icon</Table.HeaderCell>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Edit/Delete</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {_.sortBy(this.props.categories, 'name').map((category) => <CategoryAdmin key={category._id}
                                                                                            category={category}/>)}
                </Table.Body>
              </Table>
              <AddCategory/>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
              <Header as="h3" textAlign="left"><Icon name='dropdown'/>Users</Header>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 3}>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Username</Table.HeaderCell>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Image</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Edit/Delete</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {_.sortBy(this.props.users, 'username').map((user) => <UserAdmin key={user._id} user={user}/>)}
                </Table.Body>
              </Table>
            </Accordion.Content>
          </Accordion>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListStuffAdmin.propTypes = {
  items: PropTypes.array.isRequired,
  reports: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Items');
  const subscription2 = Meteor.subscribe('Reports');
  const subscription3 = Meteor.subscribe('Categories');
  const subscription4 = Meteor.subscribe('UserSearch');
  return {
    items: Items.find({}).fetch(),
    reports: Reports.find({}).fetch(),
    categories: Categories.find({}).fetch(),
    users: Users.find({}).fetch(),
    ready: (subscription.ready() && subscription2.ready() && subscription3.ready() && subscription4.ready()),
  };
})(ListStuffAdmin);
