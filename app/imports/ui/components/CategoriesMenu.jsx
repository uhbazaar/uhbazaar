import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


class CategoriesMenu extends React.Component {
  render() {
    return (
            <Card>
              <Card.Content >
                <Card.Header>
                  <Icon size='big' name={this.props.category.icon}/>{this.props.category.name}</Card.Header>
              </Card.Content>
            </Card>
    );
  }
}

CategoriesMenu.propTypes = {
  category: PropTypes.object.isRequired,
};

export default withRouter(CategoriesMenu);
