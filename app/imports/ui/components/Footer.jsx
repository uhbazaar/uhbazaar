import React from 'react';
import { Container, Divider } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = {
      backgroundColor: '#17252a',
      position: 'absolute',
      bottom: '0',
      width: '100%',
      height: '100px',
    };
    return (
        <Container fluid style={divStyle}>
          <footer>
            <div className="ui center aligned container">
              <Container>
                <Divider horizontal inverted>
                  UH Bazaar
                </Divider>
                <Divider horizontal inverted>
                  Where East Meets West
                </Divider>
              </Container>
            </div>
          </footer>
        </Container>
    );
  }
}

export default Footer;
