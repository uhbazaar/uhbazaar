import React from 'react';
import { Container } from 'semantic-ui-react';
import CategoryMenu from '../components/CategoryMenu';

/** A simple static component to render some text for the landing page. */
class CategoryPage extends React.Component {
  render() {
    return (
        <div>
          <Container>
            <style>{'body {background-color: #def2f1;, color: }'}</style>
            <CategoryMenu/>
          </Container>
        </div>
    );
  }
}

export default CategoryPage;
