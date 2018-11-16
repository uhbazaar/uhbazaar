import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import React from 'react';
import { Card, Header, Icon, Button, Container, Image } from 'semantic-ui-react';

class ShowUser extends React.Component {

  render() {
    const cardFontStyle = { color: '#17252a' };
    const cardColor = { backgroundColor: '#feffff' };
    return (
        <Card style={cardColor}>
          <Card.Content>
            <Image floated='right' size='mini' src={this.props.user.image}/>
            <Card.Header style={cardFontStyle}>{this.props.user.firstName} {this.props.user.lastName}</Card.Header>
            <Card.Meta style={cardFontStyle}>
              <a>
                <Icon name='gem'/>
                10 Items for sale!
              </a></Card.Meta>
            <Card.Description style={cardFontStyle}>
              {this.props.user.description}
            </Card.Description>
          </Card.Content>
          <Card.Content centered extra>
              <Link to={`/userprofile/${this.props.user._id}`}>
                <Button color='blue' size='tiny' >View</Button>
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
