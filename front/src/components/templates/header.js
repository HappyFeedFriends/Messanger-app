import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ChangeFormState } from '../../redux/actions';

class Header extends Component {
    StateFormOpen(index){
        this.props.ChangeFormState(true,index)
    }

    render(){
        return (
            <header className="App-header">
                <img alt="" src="/img/logo.png" className="logo"/>

                <ul>

                </ul>

                <ul className="ul_links row">
                    <li className="row hover_separator">
                        <div className='SectionNavigation-Item' onClick={(e) => this.StateFormOpen(1)}>
                            <span className='row Section-Title register'>Зарегистрироваться</span>
                        </div>       
                    </li>

                    <li>
                        <div className='SectionNavigation-Item' onClick={(e) => this.StateFormOpen(0)}>
                            <span className='Section-Title login'>Войти</span>
                        </div>       
                    </li>

                    {/* <li>
                        <div className="UserProfile">
                            <div>
                                <span>HappyFeedFriends</span>
                            </div>
                            <div>
                                <img src={'../user_avatars/'} alt=""/>
                            </div>
                        </div>
                    </li> */}
                </ul>


            </header>
        );
    }
};

export default connect(
    null,
    {ChangeFormState},
)(Header)