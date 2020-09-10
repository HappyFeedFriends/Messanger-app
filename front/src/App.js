import React, { Component, StrictMode } from 'react';

import {
  Route,
  Switch,
  Redirect,
  withRouter,
  Link,
} from "react-router-dom"

import Forms from './components/Forms';
import Header from './templates/header';

class App extends Component {

  constructor(props){
    super(props)


    this.state = {
      bIsOpenForms:true,
    }
  }

  SetStateForms(bState){
    this.setState({
      bIsOpenForms: bState
    })

  }

  

  render() {
    const { history } = this.props
    return (
      <StrictMode>

        <Header StateFormToggle={(bState) => this.SetStateForms(bState)} />
        
        {this.state.bIsOpenForms ? <Forms/> : ''}


        {/* <Switch>
          <Route history={history} path='/signup' component={SignUp} />
        </Switch> */}



      </StrictMode>
    );
  }
}

export default withRouter(App)