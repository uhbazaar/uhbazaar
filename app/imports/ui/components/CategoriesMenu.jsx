import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

class CategoriesMenu extends React.Component {
  render() {
    return (
            <Card raised link as={NavLink} exact to="/categorypage">
              <Card.Content >
                <Card.Header>
                  <Icon size='big' name={this.props.category.icon}/> {`  ${this.props.category.name}`}</Card.Header>
              </Card.Content>
              <Card.Content extra>
                  <Icon name='list' />
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
