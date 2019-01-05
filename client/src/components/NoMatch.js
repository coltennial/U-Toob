import React from 'react';
import { Header, Container, Button, Grid, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
const NoMatch = () => (
  <div>
  <Header as='h1' icon textAlign='center'>
  < br/>
    <Icon name='band aid' circular/>
    <Header>Oops! Sorry that page doesn't exist!</Header>
    
    <Link to='/'>
      <Button size='massive'>GO TO HOME</Button>
    </Link>
  </Header>
  </div>
)


export default NoMatch;