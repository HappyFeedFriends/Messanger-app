import React, { Component } from 'react';

import {
  Route,
  Switch,
  Redirect,
  withRouter,
  Link,
} from "react-router-dom"

export default () => {
    return (
        <header className="App-header">
            <img src="/img/logo.png" className="logo"/>

            <ul>

            </ul>

            <ul class="ul_links row">
                <li className="row hover_separator">
                    <Link className='SectionNavigation-Item' to='/register'>
                        <span className='row Section-Title register'>Зарегистрироваться</span>
                    </Link>       
                </li>

                <li>
                    <Link className='SectionNavigation-Item' to='/register'>
                        <span className='Section-Title login'>Войти</span>
                    </Link>       
                </li>
            </ul>


        </header>
    );
};