import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Grid, Card, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Categories } from '../../api/category/category';
import CategoriesMenu from '../components/CategoriesMenu';

/** A simple static component to render some text for the landing page. */
class CategoriesPage extends React.Component {

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    const gridStyle = { marginTop: '64px' };
    return (
        <div>
          <Grid className='ui link cards' verticalAlign='middle' style={gridStyle}>
          <Container>
            <style>{'body {background-color: #def2f1;}'}</style>
              <Card.Group centered>
                {this.props.categories.map((category) => <CategoriesMenu key={category._id} category={category}/>)}
              </Card.Group>
          </Container>
          </Grid>
        </div>
    );
  }
}

CategoriesPage.propTypes = {
  categories: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const subscription = Meteor.subscribe('Categories');
  return {
    categories: Categories.find({}).fetch(),
    ready: subscription.ready(),
  };
})(CategoriesPage);
