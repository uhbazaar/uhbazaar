import React from 'react';
import { Card, Icon, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


class CategoriesMenu extends React.Component {
  render() {
    const gridStyle = { marginTop: '64px' };
    return (
        <Grid className='ui link cards' verticalAlign='middle' style={gridStyle}>
          <Card.Group centered>
            <Card>
              <Card.Content >
                <Card.Header> <Icon size='big' name={this.props.category.icon}/>{this.props.category.name}</Card.Header>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid>
    );
  }
}

CategoriesMenu.propTypes = {
  category: PropTypes.object.isRequired,
};

export default withRouter(CategoriesMenu);
