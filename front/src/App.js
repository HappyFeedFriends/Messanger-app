import React, { Component, StrictMode  } from 'react';
import { connect } from 'react-redux';

import {
  // Route,
  // Switch,
  // Redirect,
  withRouter,
  // Link,
} from "react-router-dom"

import Forms from './components/Forms.js';
import Preloader from './components/preloader.js';
import Header from './components/templates/header.js';
import cfg from './config/api.json'
import { ChangeFormState, ChangeLoadingState } from './redux/actions.js';

class App extends Component {
  componentDidMount() {
    document.title = 'Chat RUS'


    fetch(cfg.api_url + 'user',{credentials:'include'})
    .then(response => response.json())
    .then(res => {
      this.props.ChangeLoadingState(false)
    })
    .catch((reason) => {
      this.props.ChangeLoadingState(false)
    })

  }

  render() {
    const { history } = this.props
    return this.props.Loading
    ? <Preloader/> 
    :(
        <StrictMode>

          <Header/>
          
          {this.props.formOpen && <Forms />}


          {/* <Switch>
            <Route history={history} path='/signup' component={SignUp} />
          </Switch> */}

        </StrictMode>
    );
  }
}

const mapStateToProps = state => {
  return { 
      Loading:state.app.IsLoading, 
      formOpen:state.app.IsOpenForms
  };
};

export default connect(
  mapStateToProps,
  {ChangeFormState,ChangeLoadingState}
)(withRouter(App))