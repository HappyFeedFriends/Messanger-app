import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect,
  withRouter,
  Link,
} from "react-router-dom"
import cfg from '../../config/api.json'

 
export default class Header extends Component {

    state = {
        userName:null,
        auth:false,
    }

    StateFormOpen(e){
        this.props.StateFormToggle(true)
    }

    componentDidMount () {
        const _this = this
        fetch(cfg.api_url + 'user',{credentials: 'include'})
        .then(function(response) {
            response.json().then(function(json) {
                console.log((json))
                setInterval(() => {
                    _this.setState({
                        auth:true,
                    })    
                }, 2500);
            })
        }).catch(function(err) {
          console.log(err)
        });
      }

    render(){
        return this.state.auth ? (
            <header className="App-header">
                <img src="/img/logo.png" className="logo"/>

                <ul>

                </ul>

                <ul class="ul_links row">
                    <li className="row hover_separator">
                        <div className='SectionNavigation-Item' onClick={(e) => this.StateFormOpen()} to='/signup'>
                            <span className='row Section-Title register'>Зарегистрироваться</span>
                        </div>       
                    </li>

                    {/* <li>
                        <div className='SectionNavigation-Item' to='/signin'>
                            <span className='Section-Title login'>Войти</span>
                        </div>       
                    </li> */}

                    <li>
                        <div className="UserProfile">
                            <div>
                                <span>HappyFeedFriends</span>
                            </div>
                            <div>
                                <img src={'../user_avatars/'} alt=""/>
                            </div>
                        </div>
                    </li>
                </ul>


            </header>
        ) : null;
    }
};