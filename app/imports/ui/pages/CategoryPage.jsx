import React from 'react';
import { Container } from 'semantic-ui-react';
import CategoryMenu from '../components/CategoryMenu';

/** A simple static component to render some text for the landing page. */
class CategoryPage extends React.Component {
  render() {
    const mainContainerStyle = {
      marginTop: '128px',
      paddingBottom: '128px',
      marginBottom: '24vh',
    };
    return (
        <div>
          <Container style={mainContainerStyle}>
            <style>{'body {background-color: #def2f1;, color: }'}</style>
            <CategoryMenu/>
          </Container>
        </div>
    );
  }
}

export default CategoryPage;
