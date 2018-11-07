import React from 'react';
import CategoryTopMenu from '../components/CategoryTopMenu';

/** A simple static component to render some text for the landing page. */
class Category extends React.Component {
  render() {
    return (
        <div>
          <CategoryTopMenu/>
        </div>
    );
  }
}

export default Category;
