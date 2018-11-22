import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, NavLink } from 'react-router-dom';

class CategoriesMenu extends React.Component {

  render() {
    const words = { fontFamily: 'Cinzel' };
    return (
          <Card raised link as={NavLink} to={`/categorypage/${this.props.category.name}/${this.props.category.icon}/`}>
            <Card.Content>
              <Card.Header style={words}>
                <Icon size='big' name={this.props.category.icon}/> {`  ${this.props.category.name}`}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <Icon name='list'/>
              Number of Listings
            </Card.Content>
          </Card>
      );
  }
}

CategoriesMenu.propTypes = {
  category: PropTypes.object.isRequired,
};

export default withRouter(CategoriesMenu);
