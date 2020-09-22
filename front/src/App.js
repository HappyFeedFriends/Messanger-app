import React, { Component, StrictMode  } from 'react';
import { connect } from 'react-redux';

import {
  Route,
  Switch,
  // Redirect,
  withRouter,
  // Link,
} from "react-router-dom"

import Forms from './components/Forms.js';
import Preloader from './components/preloader.js';
import Header from './components/templates/header.js';
import cfg from './config/api.json'
import { ChangeFormState, ChangeLoadingState, UserDataChangeAvatarURL, UserDataChangeUserName, UserDataChangeIsAuth } from './redux/actions.js';
import Profile from './components/profile.js';

class App extends Component {
  componentDidMount() {
    document.title = 'Chat RUS'


    fetch(cfg.api_url + 'user',{credentials:'include'})
    .then(response => response.json())
    .then(res => {
        this.props.UserDataChangeAvatarURL(res.avatar_url)
        this.props.UserDataChangeUserName(res.username)
        this.props.UserDataChangeIsAuth(true)
    })
    .finally(() => {
      setTimeout(() => {
        this.props.ChangeLoadingState(false)
      },0)

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


          <Switch>
            <Route history={history} path='/profile' component={Profile} />
          </Switch>

        </StrictMode>
    );
  }
}

const mapStateToProps = state => {
  return { 
      Loading:state.app.IsLoading, 
      formOpen:state.app.IsOpenForms,
  };
};

export default connect(
  mapStateToProps,
  {ChangeFormState,ChangeLoadingState,UserDataChangeAvatarURL,UserDataChangeUserName,UserDataChangeIsAuth}
)(withRouter(App))