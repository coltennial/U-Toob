import React from 'react';
import { Header, Container, Button, Grid, Icon } from 'semantic-ui-react'

const NoMatch = () => (
  <div>
  <Header as='h2' icon textAlign='center'>
    <Icon name='band aid' circular />
    <Header.Content>Oops! Sorry that page doesn't exist</Header.Content>
    <Button inverted color="green">GO TO HOME</Button>
  </Header>
  </div>
)


export default NoMatch;