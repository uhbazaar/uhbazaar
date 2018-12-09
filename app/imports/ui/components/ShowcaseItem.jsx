import { Button, Item, Icon, Responsive } from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

class ShowcaseItem extends React.Component {
  render() {
    const cardFontStyle = {
      color: '#17252a',
      marginBottom: '8px',
      fontWeight: 'bold',
      fontSize: '16px',
    };
    const button = { backgroundColor: '#3aafa9', color: '#feffff' };
    const button2 = { backgroundColor: '#af563a', color: '#feffff' };
    const imageStyle = { marginTop: '48px' };
    const itemStyle = { marginBottom: '48px', marginTop: '32px' };
    return (
        <div>
          <Responsive minWidth={768}>
            <Item style={itemStyle}>
              <Item.Image centered rounded size='medium' style={imageStyle} src={this.props.item.image}/>
              <Item.Content verticalAlign='middle'>
                <Item.Header>{this.props.item.title}</Item.Header>
                <Item.Meta>
                  <span className='price'>{`$${this.props.item.price}`}</span>
                </Item.Meta>
                <Item.Description style={cardFontStyle}>
                  {this.props.item.description}
                </Item.Description>
                <Item.Content>
                  <Button.Group>
                    <Button href={`mailto:${this.props.item.owner}`} animated='vertical' style={button} size='large'>
                      <Button.Content visible>Barter!</Button.Content>
                      <Button.Content hidden>
                        <Icon name='money bill alternate'/>
                      </Button.Content>
                    </Button>
                    <Button.Or/>
                    <Link to={`/createReport/${this.props.item._id}`}>
                      <Button animated='fade' style={button2} size='large'>
                        <Button.Content visible>Report</Button.Content>
                        <Button.Content hidden>
                          <Icon name='ambulance'/>
                        </Button.Content>
                      </Button>
                    </Link>
                  </Button.Group>
                </Item.Content>
              </Item.Content>
            </Item>
          </Responsive>

          <Responsive maxWidth={768}>
            <Item style={itemStyle}>
              <Item.Image centered rounded size='small' style={imageStyle} src={this.props.item.image}/>
              <Item.Content verticalAlign='middle'>
                <Item.Header>{this.props.item.title}</Item.Header>
                <Item.Meta>
                  <span className='price'>{`$${this.props.item.price}`}</span>
                </Item.Meta>
                <Item.Description style={cardFontStyle}>
                  {this.props.item.description}
                </Item.Description>
                <Item.Content centered>
                  <Button.Group>
                    <Button href={`mailto:${this.props.item.owner}`} animated='vertical' style={button} size='small'>
                      <Button.Content visible>Barter!</Button.Content>
                      <Button.Content hidden>
                        <Icon name='money bill alternate'/>
                      </Button.Content>
                    </Button>
                    <Button.Or/>
                    <Link to={`/createReport/${this.props.item._id}`}>
                      <Button animated='fade' style={button2} size='small'>
                        <Button.Content visible>Report</Button.Content>
                        <Button.Content hidden>
                          <Icon name='ambulance'/>
                        </Button.Content>
                      </Button>
                    </Link>
                  </Button.Group>
                </Item.Content>
              </Item.Content>
            </Item>
          </Responsive>
        </div>
    );
  }
}

/** Require a document to be passed to this component. */
ShowcaseItem.propTypes = {
  item: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ShowcaseItem);
