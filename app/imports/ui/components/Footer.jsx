import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
        <div>
          {this.props.currentUser !== '' ? (
              <Container fluid className='footer-background'>
                <Grid divided='vertically'>
                  <Grid.Row textAlign={'center'} internally celled padded columns={3}>
                    <Grid.Column>
                    </Grid.Column>
                    <Grid.Column>
                     A COMMUNITY FOR THE COMMUNITY, WHERE EAST MEETS WEST
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
          ) : ''}
        </div>
    );
  }
}

/** Declare the types of all properties. */
Footer.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const FooterContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(Footer);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(FooterContainer);
