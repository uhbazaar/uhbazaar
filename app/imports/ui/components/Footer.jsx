import React from 'react';
import { Container, Divider, Image } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = {
      position: 'relative',
      bottom: '0',
      width: '100%',
      height: '100px',
      fontFamily: 'Cinzel',
      // paddingTop: '16vh',
    };
    const darkify = {
      backgroundColor: '#17252a',
      paddingTop: '16px',
      paddingBottom: '32px',
    };
    const imageStyle = { opacity: '0.9' };

    return (
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
    );
  }
}

export default Footer;
