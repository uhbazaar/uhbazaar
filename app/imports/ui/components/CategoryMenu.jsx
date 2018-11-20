import React from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class CategoryMenu extends React.Component {

  render() {
    return (
              <Card.Group >
                <Card>
                  <Image src='images/backpack.jpg'/>
                  <Card.Content>
                    <Card.Header>Lawn Mower</Card.Header>
                    <Card.Description>After some years of mowing dem lawns for you fine folks,
                      its about time I retired.</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name='money'/>
                    <span className='price'>300</span>
                  </Card.Content>
                  <Card.Content extra>
                    <span className='location'>1234 Oak ln Greenbow, AL 98475</span>
                  </Card.Content>
                </Card>
                <Card>
                  <Image src='images/lawn-mower.jpeg'/>
                  <Card.Content>
                    <Card.Header>Lawn Mower</Card.Header>
                    <Card.Description>After some years of mowing dem lawns for you fine folks,
                      its about time I retired.</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name='money'/>
                    <span className='price'>300</span>
                  </Card.Content>
                  <Card.Content extra>
                    <span className='location'>1234 Oak ln Greenbow, AL 98475</span>
                  </Card.Content>
                </Card>
                <Card>
                  <Image src='images/lawn-mower.jpeg'/>
                  <Card.Content>
                    <Card.Header>Lawn Mower</Card.Header>
                    <Card.Description>After some years of mowing dem lawns for you fine folks,
                      its about time I retired.</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name='money'/>
                    <span className='price'>300</span>
                  </Card.Content>
                  <Card.Content extra>
                    <span className='location'>1234 Oak ln Greenbow, AL 98475</span>
                  </Card.Content>
                </Card>
                <Card>
                  <Image src='images/lawn-mower.jpeg'/>
                  <Card.Content>
                    <Card.Header>Lawn Mower</Card.Header>
                    <Card.Description>After some years of mowing dem lawns for you fine folks,
                      its about time I retired.</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name='money'/>
                    <span className='price'>300</span>
                  </Card.Content>
                  <Card.Content extra>
                    <span className='location'>1234 Oak ln Greenbow, AL 98475</span>
                  </Card.Content>
                </Card>
                <Card>
                  <Image src='images/lawn-mower.jpeg'/>
                  <Card.Content>
                    <Card.Header>Lawn Mower</Card.Header>
                    <Card.Description>After some years of mowing dem lawns for you fine folks,
                      its about time I retired.</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name='money'/>
                    <span className='price'>300</span>
                  </Card.Content>
                  <Card.Content extra>
                    <span className='location'>1234 Oak ln Greenbow, AL 98475</span>
                  </Card.Content>
                </Card>
                <Card>
                  <Image src='images/lawn-mower.jpeg'/>
                  <Card.Content>
                    <Card.Header>Lawn Mower</Card.Header>
                    <Card.Description>After some years of mowing dem lawns for you fine folks,
                      its about time I retired.</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name='money'/>
                    <span className='price'>300</span>
                  </Card.Content>
                  <Card.Content extra>
                    <span className='location'>1234 Oak ln Greenbow, AL 98475</span>
                  </Card.Content>
                </Card>
                <Card>
                  <Image src='images/lawn-mower.jpeg'/>
                  <Card.Content>
                    <Card.Header>Lawn Mower</Card.Header>
                    <Card.Description>After some years of mowing dem lawns for you fine folks,
                      its about time I retired.</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name='money'/>
                    <span className='price'>300</span>
                  </Card.Content>
                  <Card.Content extra>
                    <span className='location'>1234 Oak ln Greenbow, AL 98475</span>
                  </Card.Content>
                </Card>
              </Card.Group>
    );
  }
}
export default withRouter(CategoryMenu);
