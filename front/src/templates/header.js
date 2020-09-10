import React, { Component } from 'react';

import {
  Route,
  Switch,
  Redirect,
  withRouter,
  Link,
} from "react-router-dom"

export default (props) => {

    function StateFormOpen(e){
        props.StateFormToggle(true)
    }

    return (
        <header className="App-header">
            <img src="/img/logo.png" className="logo"/>

            <ul>

            </ul>

            <ul class="ul_links row">
                <li className="row hover_separator">
                    <div className='SectionNavigation-Item' onClick={StateFormOpen} to='/signup'>
                        <span className='row Section-Title register'>Зарегистрироваться</span>
                    </div>       
                </li>

                <li>
                    <div className='SectionNavigation-Item' to='/signin'>
                        <span className='Section-Title login'>Войти</span>
                    </div>       
                </li>
            </ul>


        </header>
    );
};