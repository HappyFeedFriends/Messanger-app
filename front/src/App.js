import React, { Component, StrictMode } from 'react';

import {
  Route,
  Switch,
  Redirect,
  withRouter,
  Link,
} from "react-router-dom"

import register from './routes/register';
import Header from './templates/header';

class App extends Component {
  render() {
    const { history } = this.props

    return (
      <StrictMode className="App">

        <Header />

        <Switch>
          <Route history={history} path='/register' component={register} />
        </Switch>

      </StrictMode>
    );
  }
}

export default withRouter(App)