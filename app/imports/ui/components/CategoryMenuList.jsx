import React from 'react';
import { List, Image, Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { first } from 'underscore';

class CategoryMenuList extends React.Component {

  render() {
    const dateStyle = {
      fontSize: 18,
    };
    const titleStyle = {
      fontSize: 18,
      fontWeight: 'bold',
    };
    const contentStyle = {
      marginTop: '15px',
    };

    let description = '';
    const n = 80;
    if (this.props.item.description.length > n) {
      description = first(this.props.item.description, n);
      description = description.concat('.', '.', '.');
    } else {
      description = this.props.item.description;
    }

    return (
        <List.Item as={NavLink} to={`/item/${this.props.item._id}`}>
            <Image size='tiny' avatar src={this.props.item.image} />
          <List.Content style={contentStyle}>
            <List.Header style={dateStyle}>
              {`${this.props.item.date}     ${this.props.item.location}`}
            </List.Header>
            <List.Description as='a' style={titleStyle}>
              {this.props.item.title}
            </List.Description>
            <List.Description>
              {description}
            </List.Description>
            <List.Item>
              <span className='price'>{`$${this.props.item.price}`}</span>
            </List.Item>
          </List.Content>
        </List.Item>
    );
  }
}

CategoryMenuList.propTypes = {
  item: PropTypes.object.isRequired,
};

export default withRouter(CategoryMenuList);
