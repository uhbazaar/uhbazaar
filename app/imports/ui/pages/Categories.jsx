import React from 'react';
import { Container } from 'semantic-ui-react';
import CategoriesMenu from '../components/CategoriesMenu';

/** A simple static component to render some text for the landing page. */
class Categories extends React.Component {
  render() {
    return (
        <div>
          <Container>
            <style>{'body {background-color: #def2f1;, color: }'}</style>
            <CategoriesMenu/>
          </Container>
        </div>
    );
  }
}

export default Categories;
