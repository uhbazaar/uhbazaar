import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Loader, Menu, Icon, Responsive } from 'semantic-ui-react';
import { Users } from '/imports/api/user/user';
import { withTracker } from 'meteor/react-meteor-data';
import { sortBy } from 'underscore';
import PropTypes from 'prop-types';
import ShowUser from '../components/ShowUser';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ShowUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'rating',
      activeView: 'double',
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleViewClick = (e, { name }) => this.setState({ activeView: name })

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  getUsers(everybody) {
    const users = sortBy(everybody, this.state.activeItem);
    return users.map((user, index) => <ShowUser key={index}
                                                user={user}/>);
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const styleCards = {
      marginTop: '180px',
      paddingBottom: '64px',
      marginBottom: '64vh',
    };
    const { activeItem } = this.state.activeItem;
    const { activeView } = this.state.activeView;
    if (!Users.findOne()) {
      return (
          <Container style={styleCards}>
            <style>{'body { background: url(images/uh-logo.png) no-repeat center fixed; }'}</style>
            <style>{'body { background-color: #def2f1; }'}</style>
            <Header as="h2" textAlign="center">Please log in to see the current users</Header>
          </Container>
      );
    }

    let size = 3;
    switch (this.state.activeView) {
      case 'big':
        size = 3;
        break;
      case 'small':
        size = 7;
        break;
      case 'single':
        size = 1;
        break;
      case 'double':
        size = 2;
        break;
      default:
        size = 2;
        break;
    }

    return (
        <Container style={styleCards}>
          <Responsive minWidth={768}>
            <Menu text>
              <Menu.Item header>View</Menu.Item>
              <Menu.Item
                  name='big'
                  active={activeView === 'big'}
                  onClick={this.handleViewClick}
              />
              <Menu.Item
                  name='small'
                  active={activeView === 'small'}
                  onClick={this.handleViewClick}
              />
            </Menu>
          </Responsive>

          <Responsive maxWidth={768}>
            <Menu text>
              <Menu.Item header>View</Menu.Item>
              <Menu.Item
                  name='single'
                  active={activeView === 'single'}
                  onClick={this.handleViewClick}
              />
              <Menu.Item
                  name='double'
                  active={activeView === 'double'}
                  onClick={this.handleViewClick}
              />
            </Menu>
          </Responsive>

          <Menu text>
            <Menu.Item header>Sort By</Menu.Item>
            <Menu.Item
                name='firstName'
                active={activeItem === 'firstName'}
                onClick={this.handleItemClick}
            />
            <Menu.Item
                name='lastName'
                active={activeItem === 'lastName'}
                onClick={this.handleItemClick}
            />
            <Menu.Item
                name='rating'
                active={activeItem === 'rating'}
                onClick={this.handleItemClick}
            />
          </Menu>

          <style>{'body { background: url(images/uh-logo.png) no-repeat center fixed; }'}</style>
          <style>{'body { background-color: #def2f1; }'}</style>
          <Header as='h1' icon textAlign='center'>
            <Icon name='law' circular/>
            <Header.Content>Merchants and Craftsman</Header.Content>
          </Header>
          <Card.Group centered itemsPerRow={size}>
            {this.getUsers(this.props.users)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ShowUsers.propTypes = {
  users: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
  ready2: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('UserSearch');
  const subscription2 = Meteor.subscribe('Items');
  return {
    users: Users.find({}).fetch(),
    ready: (subscription.ready()),
    ready2: (subscription2.ready()),
  };
})(ShowUsers);
