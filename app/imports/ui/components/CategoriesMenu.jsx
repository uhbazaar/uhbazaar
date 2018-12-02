import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Items } from '../../api/item/item';

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
 *        FILE:           CategoriesMenu.jsx
 *
 *        DESCRIPTION:
 ********************************************************************** */

class CategoriesMenu extends React.Component {

  numOfItems(items, cat) {
    return items.filter(item => item.category === cat).length;
  }

  render() {
    const words = { fontFamily: 'Cinzel' };
    const num = this.numOfItems(this.props.items, this.props.category.name);
    return (
          <Card raised link as={NavLink} to={`/categorypage/${this.props.category.name}/${this.props.category.icon}/`}>
            <Card.Content>
              <Card.Header style={words}>
                <Icon size='big' name={this.props.category.icon}/> {`  ${this.props.category.name}`}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <Icon name='list'/>
              {num}
            </Card.Content>
          </Card>
      );
  }
}

CategoriesMenu.propTypes = {
  category: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const subscription = Meteor.subscribe('Items');
  return {
    items: Items.find({}).fetch(),
    ready: subscription.ready(),
  };
})(CategoriesMenu);
