import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { first } from 'underscore';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class CategoryMenu extends React.Component {

  render() {
    let description = '';
    const n = 80;
    if (this.props.item.description.length > n) {
          description = first(this.props.item.description, n);
          description = description.concat('.', '.', '.');
    } else {
      description = this.props.item.description;
    }
    return (
        <Card raised link href={`/#/item/${this.props.item._id}`}>
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
            <span className='seller'>{this.props.item.owner}</span>
          </Card.Content>
        </Card>
    );
  }
}

CategoryMenu.propTypes = {
  item: PropTypes.object.isRequired,
};

export default withRouter(CategoryMenu);
