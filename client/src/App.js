import React, { Fragment, } from 'react';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from 'semantic-ui-react';
import Home from './components/Home';
import Login from './components/Login';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => (
<Fragment>
  <Navbar />
  <FetchUser>

  <Container>
    <Switch>
      <ProtectedRoute exact path='/' component={Home} />
      <Route exact path='/' component={Home} />
      <Route exact path='/' component={Home} />
      <Route component={NoMatch} />
    </Switch>
  </Container>
  </FetchUser>
</Fragment>
)

export default App;
