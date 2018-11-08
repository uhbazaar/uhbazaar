import React from 'react';
import { Container } from 'semantic-ui-react';
import CategoryMenu from '../components/CategoryMenu';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

/** A simple static component to render some text for the landing page. */
class Category extends React.Component {
  render() {
    return (
        <div>
          <Container>
            <NavBar/>
            <style>{'body {background-color: #def2f1;, color: }'}</style>
            <CategoryMenu/>
            <Footer/>
          </Container>
        </div>
    );
  }
}

export default Category;
