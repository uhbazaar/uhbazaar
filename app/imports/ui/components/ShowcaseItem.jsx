import { Button, Item } from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

class ShowcaseItem extends React.Component{
  render() {
    const cardFontStyle = { color: '#17252a' };
    const buttonStyle = { marginTop: '16px' };
    return (
        <Item.Group>
        <Item>
          <Item.Image src={this.props.item.image}/>
          <Item.Content>
            <Item.Description style={cardFontStyle}>
              {this.props.item.title}
            </Item.Description>
            <Button style={buttonStyle} floated='right'>View</Button>
          </Item.Content>
        </Item>
        <hr/>
        </Item.Group>
    );
  }
}

/** Require a document to be passed to this component. */
ShowcaseItem.propTypes = {
  item: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ShowcaseItem);
