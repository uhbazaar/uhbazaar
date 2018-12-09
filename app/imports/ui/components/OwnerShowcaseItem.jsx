import { Button, Item, Icon } from 'semantic-ui-react';
import React from 'react';
import { Bert } from 'meteor/themeteorchef:bert';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Items } from '../../api/item/item';

class OwnerShowcaseItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.deleteCallback = this.deleteCallback.bind(this);
  }

  deleteCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Delete failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Delete succeeded' });
      this.formRef.reset();
    }
  }

  onClick() {
    if (confirm('The item will be gone for good!')) {
      Items.remove(this.props.item._id, this.deleteCallback);
    }
  }

  render() {
    const cardFontStyle = {
      color: '#17252a',
      marginBottom: '8px',
      fontWeight: 'bold',
      fontSize: '16px',
    };
    const imageStyle = { marginTop: '48px' };
    const itemStyle = { marginBottom: '48px', marginTop: '32px' };
    return (
          <Item style={itemStyle}>
            <Item.Image centered rounded size='medium' style={imageStyle} src={this.props.item.image}/>
            <Item.Content verticalAlign='middle'>
              <Item.Header>{this.props.item.title}</Item.Header>
              <Item.Meta>
                <span className='price'>{`$${this.props.item.price}`}</span>
              </Item.Meta>
              <Item.Description style={cardFontStyle}>
                {this.props.item.description}
              </Item.Description>
              <Item.Content centered>
                <Button color='red' onClick={this.onClick}>Remove</Button>
              </Item.Content>
            </Item.Content>
          </Item>
    );
  }
}

/** Require a document to be passed to this component. */
OwnerShowcaseItem.propTypes = {
  item: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(OwnerShowcaseItem);
