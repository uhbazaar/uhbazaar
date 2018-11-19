import React from 'react';
import { Image, Header, Grid, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Item extends React.Component {
  render() {
    return (
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header as='h2' content={this.props.item.title}/>
            </Grid.Column>
            <Grid.Column>
              <Header as='h2'>${this.props.item.price}</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>{this.props.item.location}</Grid.Row>
          <Grid.Row><Image src={this.props.item.image} size='huge'/></Grid.Row>
          <Grid.Row>{this.props.item.description}</Grid.Row>
          <Grid.Row><Button>Buy Now</Button><Button>Make Offer</Button><Button>Report an Issue</Button></Grid.Row>
        </Grid>
    );
  }
}

/** Require a document to be passed to this component. */
Item.propTypes = {
  item: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Item);
