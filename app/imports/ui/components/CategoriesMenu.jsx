import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class CategoriesMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categoryName: '', mode: 'categories' };
    this.toCategory = this.toCategory.bind(this);
  }

  toCategory() {
    this.setState({ categoryName: this.props.category.name, mode: 'cat' });
  }

  render() {
    if (this.state.mode === 'categories') {
      return (
          <Card raised link onClick={this.toCategory}>
            <Card.Content>
              <Card.Header>
                <Icon size='big' name={this.props.category.icon}/> {`  ${this.props.category.name}`}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <Icon name='list'/>
              Number of Listings
            </Card.Content>
          </Card>
      );
    } else {
      return (
          <div>
          <h1>{this.state.categoryName}</h1>
          </div>
      );
    }
  }
}

CategoriesMenu.propTypes = {
  category: PropTypes.object.isRequired,
};

export default withRouter(CategoriesMenu);
