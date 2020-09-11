import React, { Component } from 'react';
import cfg from '../config/api.json'
import SignUp from '../components/form_signup';
import Loader from './loader.js';
import SignIn from './form_signIn.js';
class Forms extends Component {

    constructor(props){
        super(props)
        this.state = {
            error:'',
            Loading:false,
            FormState:0,
            signUpData:{
                username:'',
                password:'',
                password_repeat:'',
                dateBirth:'',
                gender:'',
                email:'',
            },
        }
    }

    async handleSubmit(event) {
        event.preventDefault();

        this.setState({
            error:'',
            Loading:true,
        });

        const api_path = cfg.api_path + 'signup';
        let response = await fetch(api_path, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(this.state.signUpData),

        });
        const err = await response.text();
        if (!!err){
            this.setState({
                error:err,
            });
        }

        this.setState({
            Loading:false,
        });

    }

    OnChangeInput(key,event){
        let data = Object.assign(this.state.signUpData)
        data[key] = event.target.value
        this.setState({
            signUpData:data,
        });
    }

    OnToggleForm(state){
        this.setState({FormState:state})
    }

    render() {
      return (
        <div class="ModalIconForms">
            <div className={this.state.Loading && 'Loading'}>
                <div  className="CloseForms" onClick={(e) => this.props.CloseForms}>
                    <div class="bar1"/>
                    <div class="bar2"/>
                </div>

                <div className="FormHeader row">
                    <h2 id="h2" onClick={() => this.OnToggleForm(1)}>Создание Аккаунта</h2>
                    <h2 id="h3" onClick={() => this.OnToggleForm(0)}>Авторизация</h2>  
                </div>
                {this.state.Loading && <Loader/>}
                {
                    this.state.FormState == 1 
                    ? <SignUp OnChangeInput={(key,event) => this.OnChangeInput(key,event)} handleSubmit={(e) => this.handleSubmit(e)} error={this.state.error}/>
                    : <SignIn/>
                }
            </div>
        </div>
      );
    }
}

export default Forms;