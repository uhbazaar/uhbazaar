import React from 'react';
import { Image, Container } from 'semantic-ui-react';

export default class FullWidthImage extends React.Component {
  render() {
    return (
        /*<Container fluid>*/
          <Image src='https://farm2.staticflickr.com/1228/1273406911_5023b91baa_b.jpg' fluid/>
        //   <p className="welcome">
        //     <b>Welcome!</b>
        //   </p>
        // </Container>
    );
  }
}
