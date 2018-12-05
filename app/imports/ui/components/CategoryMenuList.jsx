import React from 'react';
import { List, Image, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { first } from 'underscore';

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
 *        FILE:           CategoryMenuList.jsx
 *
 *        DESCRIPTION:
 *          This component file contains the CategoryMenuList class
 *          which is the optional form the items take within the
 *          CategoryPage.  If the user wants to display items in a
 *          list, they can click the list checkbox and the CategoryPage
 *          will render this view.
 *
 ********************************************************************** */

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

    const dateIcon = (
        <Icon name='calendar alternate outline'/>
    );
    const mapIcon = (
        <Icon name='compass outline'/>
    );

    let description = '';
    const n = 80;
    /**
     * Check if the item description is too long, if so, only display the first n characters.
     */
    if (this.props.item.description.length > n) {
      description = first(this.props.item.description, n);
      description = description.concat('.', '.', '.');
    } else {
      description = this.props.item.description;
    }

    return (
        <List.Item as={NavLink} to={`/item/${this.props.item._id}`}>
          <Image size='tiny' src={this.props.item.image}/>
          <List.Content style={contentStyle}>
            <List.Header style={dateStyle}>
              <List horizontal>
                <List.Item>
                <List.Content>
                  {dateIcon}
                  {this.props.item.date}
                </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    {mapIcon}
                    {this.props.item.location}
                </List.Content>
                </List.Item>
              </List>
            </List.Header>
            <List.Description style={titleStyle}>
              {this.props.item.title}
            </List.Description>
            <List.Description>
              {description}
            </List.Description>
            <List.Item>
              <span>{`$${this.props.item.price}`}</span>
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
