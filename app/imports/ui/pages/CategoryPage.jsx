import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import CategoryMenu from '../components/CategoryMenu';

/** A simple static component to render some text for the landing page. */
class CategoryPage extends React.Component {
  render() {
    console.log(this.props.match.params);
    const titleStyle = {
      marginTop: '20px',
      paddingBottom: '20px',
    }
    const mainContainerStyle = {
      marginTop: '128px',
      paddingBottom: '128px',
      marginBottom: '24vh',
    };
    return (
        <div>
          <Header style={titleStyle}>
            {this.props.match.params.name}</Header>
          <Container style={mainContainerStyle}>
            <style>{'body {background-color: #def2f1;, color: }'}</style>
            <CategoryMenu/>
          </Container>
        </div>
    );
  }
}

CategoryPage.propTypes = {
  match: PropTypes.object,
};

export default CategoryPage;
