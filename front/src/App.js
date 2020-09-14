import React, { Component, StrictMode, Suspense  } from 'react';

import {
  Route,
  Switch,
  Redirect,
  withRouter,
  Link,
} from "react-router-dom"

import Forms from './components/Forms.js';
import Loader from './components/loader.js';
// import Header from './components/templates/header.js';
const Header = React.lazy(() => import('./components/templates/header.js'));
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      bIsOpenForms:false,
    }
  }

  SetStateForms(bState){
    this.setState({
      bIsOpenForms: bState
    })

  }

  componentDidMount() {
    document.title = 'Chat RUS'
  }

  render() {
    const { history } = this.props
    return (
      <Suspense fallback={<Loader/>}>
        <StrictMode>

          <Header StateFormToggle={(bState) => this.SetStateForms(bState)} />
          
          {this.state.bIsOpenForms ? <Forms StateFormToggle={(bState) => this.SetStateForms(bState)} /> : ''}


          {/* <Switch>
            <Route history={history} path='/signup' component={SignUp} />
          </Switch> */}



        </StrictMode>
      </Suspense>
    );
  }
}

export default withRouter(App)