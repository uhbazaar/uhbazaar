import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class CategoryMenu extends React.Component {

  render() {
    return (
                <Card raised link>
                  <Image src={this.props.item.image}/>
                  <Card.Content>
                    <Card.Header>{this.props.item.name}</Card.Header>
                    <Card.Description>{this.props.item.description}</Card.Description>
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
