import React, { Component } from 'react';
import cfg from '../config/api.json'
import SignUp from './form_signup';
import Loader from './loader';
import SignIn from './form_signIn';
import Cookies from 'universal-cookie';
const cookies = new Cookies();


class Forms extends Component {
    constructor(props){
        super(props)

        this.state = {
            error:'',
            Loading:false,
            FormState:0,
            errorCode:0,
            signUpData:{
                username:'',
                password:'',
                password_repeat:'',
                dateBirth:'',
                gender:'',
                email:'',
            }, 
            signInData:{ 
                username:'',
                password:'',
            }
        }

    }

    componentDidMount(){
        document.title = 'Chat RUS | Авторизация'
    }

    async handleSubmitSignIn(event){
        event.preventDefault();
        const api_path = cfg.api_auth + 'signin';

        this.setState({
            error:'',
            Loading:true,
        });

        const stateNew = {
            error:'',
            errorCode:0,
            Loading:false,
        }

        let response = await (await fetch(api_path, {
            method:'POST',
            headers: {
                'Content-Type':'application/json',
                
            },
            body: JSON.stringify(this.state.signInData),

        })).json();

        if (response.statusCode !== 0){
            stateNew.error = response.error[0];
            stateNew.errorCode = response.errorCode
        }else{
            this.props.StateFormToggle(false)
            console.log('tetete')
            cookies.set('auth',response.data['token']);
        }

        this.setState(stateNew);       
    }

    async handleSubmit(event) {
        event.preventDefault();

        this.setState({
            error:'',
            Loading:true,
        });
        const stateNew = {
            error:'',
            Loading:false,
            FormState:this.state.FormState,
        }
        const api_path = cfg.api_auth + 'signup';
        let response = await (await fetch(api_path, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(this.state.signUpData),

        })).json();
        if (response.statusCode !== 0){
            stateNew.error = response.error[0];
            stateNew.errorCode = response.errorCode
        }else{
            stateNew.FormState = 0
        }

        this.setState(stateNew);

    }

    OnChangeInput(key,event){
        let data = { ...this.state.signUpData }
        data[key] = event.target.value
        this.setState({
            signUpData:data,
        });
    }

    OnChangeInputIn(key,event){
        let data = { ...this.state.signInData }
        data[key] = event.target.value
        this.setState({
            signInData:data,
        });


        
    }

    OnToggleForm(state){
        this.setState({FormState:state})
    }
    render(){
        return (
            <div class="ModalIconForms">
                <div className={this.state.Loading ? 'Loading' : undefined}>
                    <div  className="CloseForms" onClick={(e) => this.props.StateFormToggle(false)}>
                        <div className="bar1"/>
                        <div className="bar2"/>
                    </div>
    
                    <div className="FormHeader row">
                        <h2 id="h2" className={this.state.FormState == 1 ? 'OpenForm' : undefined} onClick={() => this.OnToggleForm(1)}>Создание Аккаунта</h2>
                        <h2 id="h3" className={this.state.FormState == 0 ? 'OpenForm' : undefined} onClick={() => this.OnToggleForm(0)}>Авторизация</h2>  
                    </div>
                    {this.state.Loading && <Loader/>}
                    {
                        this.state.FormState == 1 
                        ? <SignUp OnChangeInput={(key,event) => this.OnChangeInput(key,event)} handleSubmit={(e) => this.handleSubmit(e)} errorCode = {this.state.errorCode} error={this.state.error}/>
                        : <SignIn OnChangeInput={(key,event) => this.OnChangeInputIn(key,event)} handleSubmit={(e) => this.handleSubmitSignIn(e)} errorCode = {this.state.errorCode} error={this.state.error}/>
                    }
                </div>
            </div>
        )
    }
}

export default Forms;