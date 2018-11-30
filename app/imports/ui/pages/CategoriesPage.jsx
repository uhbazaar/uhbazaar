import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Grid, Card, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { sortBy } from 'underscore';
import { Categories } from '../../api/category/category';
import CategoriesMenu from '../components/CategoriesMenu';

/** A simple static component to render some text for the landing page. */
class CategoriesPage extends React.Component {

  sortByCategory(categories) {
    const stuff = sortBy(categories, 'name');
    return stuff.map((category) => <CategoriesMenu key={category._id} category={category}/>);
  }

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    const gridStyleCards = {
      marginTop: '172px',
      paddingBottom: '64px',
      marginBottom: '24vh',
    };

    const background = (
        <style>{'body { background: rgba(222,242,241, 0.7) url(\'/images/mat.jpg\') no-repeat fixed;' +
        ' background-blend-mode: overlay; background-size: cover;}'}
        </style>
    );

    return (
        <div>
          <Grid verticalAlign='middle' style={gridStyleCards}>
            <Container>
              {background}
              <Card.Group doubling itemsPerRow='4'>
                {this.sortByCategory(this.props.categories)}
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
