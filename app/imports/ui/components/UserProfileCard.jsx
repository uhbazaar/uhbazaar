import React from 'react';
import { Container, Header, Icon, Image, Grid, Card, Button, Responsive } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { size } from 'underscore';
import { Users } from '../../api/user/user';
import { Items } from '../../api/item/item';

class UserProfileCard extends React.Component {
  getItemAmount(user, stuff) {
    const total = stuff.filter(item => item.owner === user.username);
    return size(total);
  }

  Itemizer(user, items) {
    let status = 'Nothing to see here!';
    if (this.getItemAmount(user, items) > 1) {
      status = `${this.getItemAmount(user, items)} items to barter!`;
    } else
      if (this.getItemAmount(user, items) === 1) {
        status = '1 item to barter!';
      }
    return status;
  }

  render() {
    const cardFontStyle = { color: '#17252a' };
    const gridStyle = { marginTop: '128px', marginBottom: '128px' };
    const borderStyle = { border: 'solid 1px #feffff' };
    const cardColor = { backgroundColor: '#feffff' };
    return (
        <div>
          <Responsive minWidth={768}>
            <Grid container verticalAlign='middle' style={gridStyle}>
              <Container>
                <Grid verticalAlign='middle' className='user-profile-background' columns={4}>
                  <Grid.Row centered>
                    <Grid.Column width={6}>
                      <Image style={borderStyle} size='medium' rounded floated='left'
                             src={this.props.user.image}/>
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <Card style={cardColor} floated='right' fluid>
                        <Card.Content>
                          <Header as='h1'>{this.props.user.firstName} {this.props.user.lastName}</Header>
                          <Card.Description style={cardFontStyle}>
                            {this.props.user.description}
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <Icon name='gem'/>
                          {this.Itemizer(this.props.user, this.props.items)}
                        </Card.Content>
                        <Card.Content extra>
                          <Link to={`/edituserprofile/${this.props.user._id}`}>
                            <Button floated='right' color='blue' inverted size='tiny'>Edit Profile</Button>
                          </Link>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
            </Grid>
          </Responsive>

          <Responsive maxWidth={768}>
            <Grid container verticalAlign='middle' style={gridStyle}>
              <Container>
                <Grid verticalAlign='middle' className='user-profile-background' columns={4}>
                  <Grid.Row centered>
                    <Grid.Column width={14}>
                      <Card style={cardColor} floated='right' fluid>
                        <Image style={borderStyle} size='large' rounded floated='left'
                               src={this.props.user.image}/>
                        <Card.Content>
                          <Header as='h1'>{this.props.user.firstName} {this.props.user.lastName}</Header>
                          <Card.Description style={cardFontStyle}>
                            {this.props.user.description}
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <Icon name='gem'/>
                          {this.Itemizer(this.props.user, this.props.items)}
                        </Card.Content>
                        <Card.Content extra>
                          <Link to={`/edituserprofile/${this.props.user._id}`}>
                            <Button floated='right' color='blue' inverted size='tiny'>Edit Profile</Button>
                          </Link>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
            </Grid>
          </Responsive>

        </div>
    );
  }
}

UserProfileCard.propTypes = {
  user: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
};

export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Users');
  return {
    user: Users.findOne(),
    items: Items.find({}).fetch(),
    ready: subscription.ready(),
  };
})(UserProfileCard);
