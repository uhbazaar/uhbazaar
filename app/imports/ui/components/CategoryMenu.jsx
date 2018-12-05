import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Card, Icon, Image, Loader } from 'semantic-ui-react';
import { first } from 'underscore';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Users } from '../../api/user/user';

/** **********************************************************************
 *
 *        NAME:           Zachary Gilbert
 *
 *        PROJECT:        UH Bazaar
 *
 *        CLASS:          ICS 314
 *
 *        INSTRUCTOR:     Philip Johnson
 *
 *        FILE:           CategoryMenu.jsx
 *
 *        DESCRIPTION:
 ********************************************************************** */

class CategoryMenu extends React.Component {
  /* getUserImage(users) {
    let use = find(users, (user) => user.username === this.props.item.owner);
    if (use === undefined) {
      use = 'images/user.png';
    } else {
      use = use.image;
    }
    return use;
  } */

  finishWord(array, n) {
    let result = n;
    while (array[result].match(/[a-z]/i)) {
      result++;
    }
    return result;
  }

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    let description = '';
    const n = 80;
    if (this.props.item.description.length > n) {
          description = first(this.props.item.description, this.finishWord(this.props.item.description, n));
          description = description.concat('.', '.', '.');
    } else {
      description = this.props.item.description;
    }
    return (
        <Card raised link as={NavLink} to={`/item/${this.props.item._id}`}>
          <Card.Content as={Image}>
          <Image fluid label={this.props.item.date} src={this.props.item.image}/>
          </Card.Content>
          <Card.Content extra>
            <Card.Header>{this.props.item.title}</Card.Header>
            <Card.Description>{description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name='money'/>
            <span className='price'>{`$${this.props.item.price}`}</span>
          </Card.Content>
          <Card.Content extra>
            <span className='location'>{this.props.item.location}</span>
          </Card.Content>
          <Card.Content extra>
            <Image avatar src={this.props.item.image}/>
            <span className='seller'>{this.props.item.owner}</span>
          </Card.Content>
        </Card>
    );
  }
}

CategoryMenu.propTypes = {
  item: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const subscription = Meteor.subscribe('UserSearch');
  return {
    users: Users.find({}).fetch(),
    ready: subscription.ready(),
  };
})(CategoryMenu);
