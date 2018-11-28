import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Checkbox, Menu, Icon, Sidebar, Grid, Card, List, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { sortBy } from 'underscore';
import CategoryMenu from '../components/CategoryMenu';
import CategoryMenuList from '../components/CategoryMenuList';
import { Categories } from '../../api/category/category';
import { Items } from '../../api/item/item';
import CategoriesMenu from '../components/CategoriesMenu';

/** A simple static component to render some text for the landing page. */
class CategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      sorter: 'date',
      titleIsActive: false,
      dateIsActive: true,
      priceIsActive: false,
      listMode: false,
      cardMode: true,
    };
  }

  handleHideClick = () => this.setState({ visible: false });

  handleShowClick = () => this.setState({ visible: true });

  handleSidebarHide = () => this.setState({ visible: false });

  sortByItem(items, cat, sortKey, Component) {
    const stuff = sortBy(items, sortKey);
    return stuff.filter(item => item.category === cat).map((item) => <Component key={item._id} item={item}/>);
  }

  sortByCategory(categories) {
    const stuff = sortBy(categories, 'name');
    return stuff.map((category) => <CategoriesMenu key={category._id} category={category}/>);
  }

  render() {
    const { visible } = this.state;
    let itemsComponent;
    const titleStyle = {
      fontSize: '32px',
      fontFamily: 'Cinzel',
      paddingTop: '20px',
      paddingBottom: '20px',
      fontWeight: 'bold',
    };
    const subCat = {
      fontSize: '22px',
      fontFamily: 'Cinzel',
      paddingTop: '20px',
      paddingBottom: '12px',
      paddingLeft: '17px',
    };
    const mainContainerStyle = {
      paddingTop: '20px',
      paddingBottom: '64px',
      paddingRight: '64px',
      paddingLeft: '64px',
    };
    const sideBarStyle = {
      paddingTop: '20px',
      paddingBottom: '20px',
    };
    const catSideMenu = {
      fontWeight: 'bold',
    };

    const titleCheckbox = (
        <Checkbox checked={this.state.titleIsActive} onClick={() => this.setState({
          sorter: 'title',
          titleIsActive: true,
          dateIsActive: false,
          priceIsActive: false,
        })} label='Title'/>
    );
    const dateCheckbox = (
        <Checkbox checked={this.state.dateIsActive} onClick={() => this.setState({
          sorter: 'date',
          titleIsActive: false,
          dateIsActive: true,
          priceIsActive: false,
        })} label='Date'/>
    );
    const priceCheckbox = (
        <Checkbox checked={this.state.priceIsActive} onClick={() => this.setState({
          sorter: 'price',
          titleIsActive: false,
          dateIsActive: false,
          priceIsActive: true,
        })} label='Price'/>
    );
    const listCheckbox = (
        <Checkbox checked={this.state.listMode} onClick={() => this.setState({
          listMode: true,
          cardMode: false,
        })} label='List'/>
    );
    const cardCheckbox = (
        <Checkbox checked={this.state.cardMode} onClick={() => this.setState({
          listMode: false,
          cardMode: true,
        })} label='Gallery'/>
    );

    if (this.state.listMode) {
      itemsComponent = <List>
        {this.sortByItem(this.props.items, this.props.match.params.name, this.state.sorter, CategoryMenuList)}
      </List>;
    } else {
      itemsComponent = <Card.Group>
        {this.sortByItem(this.props.items, this.props.match.params.name, this.state.sorter, CategoryMenu)}
      </Card.Group>;
    }

    return (

        <div>
          <Menu.Header style={titleStyle}>
            <Icon size='big' name={this.props.match.params.icon}/> {`${this.props.match.params.name}`}
          </Menu.Header>
          <Button.Group>
            <Button disabled={visible} onClick={this.handleShowClick}>
              Show Options
            </Button>
          </Button.Group>
          <Sidebar.Pushable>
            <Sidebar
                as={Menu}
                vertical
                visible={visible}
                style={sideBarStyle}
                animation='push'
                width='wide'
                onHide={this.handleSidebarHide}>
              <Menu.Menu>
                <Menu.Header style={subCat}>
                  Display Mode
                </Menu.Header>
                <Menu.Item>
                  <Grid columns='2'>
                    <Grid.Column>
                      {listCheckbox}
                    </Grid.Column>
                    <Grid.Column>
                      {cardCheckbox}
                    </Grid.Column>
                  </Grid>
                </Menu.Item>
              </Menu.Menu>
              <Menu.Menu>
                <Menu.Header style={subCat}>
                  Sort By
                </Menu.Header>
                <Menu.Item>
                  {titleCheckbox}
                </Menu.Item>
                <Menu.Item>
                  {dateCheckbox}
                </Menu.Item>
                <Menu.Item>
                  {priceCheckbox}
                </Menu.Item>
              </Menu.Menu>
              <Menu.Item style={catSideMenu}>
                {this.sortByCategory(this.props.categories)}
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <Grid stackable style={mainContainerStyle}>
                <style>{'body {background-color: #def2f1; }'}</style>
                {itemsComponent}
              </Grid>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
    );
  }
}

CategoryPage.propTypes = {
  match: PropTypes.object,
  categories: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
  ready2: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const subscription = Meteor.subscribe('Categories');
  const itemSubscription = Meteor.subscribe('Items');
  return {
    categories: Categories.find({}).fetch(),
    items: Items.find({}).fetch(),
    ready: itemSubscription.ready(),
    ready2: subscription.ready(),
  };
})(CategoryPage);
