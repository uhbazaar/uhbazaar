import React from 'react';
import { Container, Divider, Image } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = {
      position: 'relative',
      bottom: '0',
      width: '100%',
      height: '100px',
      fontFamily: 'PT Sans Caption',
      paddingTop: '16vh',
    };
    const darkify = {
      backgroundColor: '#17252a',
      paddingTop: '20px',
      paddingBottom: '32px',
    };
    const imageStyle = { opacity: '0.9' };

    return (
        <div>
          {this.props.currentUser !== '' ? (
              <div style={divStyle}>
                <footer>

                  <Container fluid style={darkify}>
                    <br/>
                    <Divider horizontal inverted>
                      UH Bazaar
                    </Divider>
                    <Image style={imageStyle} centered src='/images/uh-bazaar-logo.png' size='small' circular/>
                    <Divider horizontal inverted>
                      Where East Meets West
                    </Divider>
                  </Container>
                </footer>
              </div>
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
