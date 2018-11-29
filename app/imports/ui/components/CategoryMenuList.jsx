import React from 'react';
import { List, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

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

    return (
        <List.Item>
            <Image size='tiny' avatar src={this.props.item.image} />
          <List.Content style={contentStyle}>
            <List.Header style={dateStyle}>
              {this.props.item.date}
            </List.Header>
            <List.Description as='a' style={titleStyle} href={`/#/item/${this.props.item._id}`}>
              {this.props.item.title}
            </List.Description>
            <List.Description>
              {this.props.item.description}
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
