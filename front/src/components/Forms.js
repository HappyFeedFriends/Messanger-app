import React, { Component } from 'react';
import SignUp from './form_signup';
import Loader from './loader';
import SignIn from './form_signIn';
import { connect } from 'react-redux';
import { ChangeFormState } from '../redux/actions';

class Forms extends Component {
    componentDidMount(){
        document.title = 'Chat RUS | Авторизация' 
    }
    render(){
        return (
            <div className="ModalIconForms">
                <div className={this.props.Loading ? 'Loading' : undefined}>
                    <div  className="CloseForms" onClick={(e) => this.props.ChangeFormState(false)}>
                        <div className="bar1"/>
                        <div className="bar2"/>
                    </div>
    
                    <div className="FormHeader row">
                        <h2 id="h2" className={this.props.formIndex === 1 ? 'OpenForm' : undefined} onClick={() => this.props.ChangeFormState(true,1)}>Создание Аккаунта</h2>
                        <h2 id="h3" className={this.props.formIndex === 0 ? 'OpenForm' : undefined} onClick={() => this.props.ChangeFormState(true,0)}>Авторизация</h2>  
                    </div>
                    {this.props.Loading && <Loader/>}
                    {
                        this.props.formIndex === 1 
                        ? <SignUp/>
                        : <SignIn/>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        formIndex: state.app.formIndex, 
        Loading:state.app.FormLoading, 
    };
};

export default connect(
    mapStateToProps,
    {ChangeFormState}

)(Forms)