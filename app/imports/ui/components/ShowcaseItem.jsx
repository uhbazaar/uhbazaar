import { Button, Item } from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

class ShowcaseItem extends React.Component {
  render() {
    const cardFontStyle = {
      color: '#17252a',
      marginBottom: '8px',
      fontWeight: 'bold',
      fontSize: '16px',
    };
    const imageStyle = { marginLeft: '32px' };
    return (
        <Item.Group>
          <Item>
            <Item.Image rounded size='medium' style={imageStyle} src={this.props.item.image}/>
            <Item.Content verticalAlign='middle'>
              <Item.Description style={cardFontStyle}>
                {this.props.item.title}
              </Item.Description>
              <Button.Group size='large'>
                <Button color='blue'>View</Button>
                <Button.Or/>
                <Button color='green'>Barter</Button>
              </Button.Group>
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
