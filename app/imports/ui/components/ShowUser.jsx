import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import React from 'react';
import { Card, Icon, Button, Image } from 'semantic-ui-react';
import { first, size } from 'underscore';
import { Items } from '../../api/item/item';

class ShowUser extends React.Component {
  getItemAmount(owner, stuff) {
    const total = stuff.filter(item => item.owner === owner);
    return size(total);
  }


  getUserDescription(descrip) {
    if (descrip.length > 80) {
      return `${descrip.substring(0, 79)}...`;
    }
    return descrip;

  }

  render() {
    const items = Items.find({}).fetch();
    const cardFontStyle = { color: '#17252a' };
    const background = (
        <style>{'body { background: rgba(222,242,241, 0.7) url(\'/images/canoe.jpg\') no-repeat fixed;' +
        ' background-blend-mode: overlay; background-size: cover;}'}
        </style>
    );
    const iconStyle = { marginRight: '8px', marginTop: '4px' };
    let description = '';
    const n = 30;
    if (this.props.user.description.length > n) {
      description = first(this.props.user.description, this.finishWord(this.props.user.description, n));
      description = description.concat('.', '.', '.');
    } else {
      description = this.props.user.description;
    }
    return (
        <Card>
          {background}
          <Card.Content>
            <Image floated='right' size='mini' src={this.props.user.image}/>
            <Card.Header style={cardFontStyle}>{this.props.user.firstName} {this.props.user.lastName}</Card.Header>
            <Card.Meta style={cardFontStyle}>
              <a>
                <Icon style={iconStyle} name='gem'/>
                {this.getItemAmount(this.props.user.username, items)} item(s)!
              </a></Card.Meta>
            <Card.Description style={cardFontStyle}>
              {this.getUserDescription(this.props.user.description)}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/userprofilebyid/${this.props.user._id}`}>
              <Button color='blue' size='tiny'>View</Button>
            </Link>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
ShowUser.propTypes = {
  user: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ShowUser);
