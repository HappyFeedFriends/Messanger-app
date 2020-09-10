import React, { Component } from 'react';
import cfg from '../config/api.json'

class SignUp extends Component {

    constructor(props){
        super(props)
        this.state = {
            error:'',
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

        const api_path = cfg.api_path + 'signup';
        let response = await fetch(api_path, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(this.state.signUpData),

        });
        const err = await response.text();
        console.log('error ',err)
        if (!!err){
            this.setState({
                error:err,
            });
            return
        }

        this.setState({
            error:'',
        });

    }

    OnChangeInput(key,event){
        let data = Object.assign(this.state.signUpData)
        data[key] = event.target.value
        this.setState({
            signUpData:data,
        });
    }

    render() {
      return (
        <div class="ModalIconForms">
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className="FormHeader row">
                    <h2>Создание Аккаунта</h2> 
                </div>
                <div className="FormContent column">
                    <div>
                        <span>Имя пользователя</span>
                        <div className="inputContainer username"><input onChange={(e) => this.OnChangeInput('username',e)}  required type="text" name="username"></input></div>
                        {this.state.error == '3' && 
                            <span className="SignUpError" >Введено некорректное имя аккаунта. Имя аккаунта должно быть длиной от 4 до 31 символов.</span>
                        } 
                    </div>

                    <div>
                        <span>Дата рождения</span>
                        <div className="inputContainer none"><input onChange={(e) => this.OnChangeInput('dateBirth',e)} required type="date" name="dateBirth"></input></div>
                    </div>

                    <div>
                        <span>Пол</span>
                        <div className="inputContainer none row gender">
                            <label><input onChange={(e) => this.OnChangeInput('gender',e)} required name="gender" type="radio" value="0"/>Мужской</label>
                            <label><input onChange={(e) => this.OnChangeInput('gender',e)} required name="gender" type="radio" value="1"/>Женский</label>
                        </div>
                    </div>

                    <div className="password_container">
                        <span>Пароль</span>
                        <div className="inputContainer password"><input onChange={(e) => this.OnChangeInput('password',e)} required type="password" name="password"></input></div>
                        {this.state.error == '2' && 
                            <span className="SignUpError" >Введён некорректный пароль. Пароль должен быть длиной от 6 символов.</span>
                        } 
                    </div>

                    <div>
                        <span>Повторите пароль</span>
                        <div className="inputContainer password"><input onChange={(e) => this.OnChangeInput('password_repeat',e)} required type="password" name="password_repeat"></input></div>
                        {this.state.error == '0' && 
                            <span className="SignUpError" >Пароли не совпадают!</span>
                        } 
                    </div>

                    <div>
                        <span>Адрес электронной почты</span>
                        <div className="inputContainer email"><input onChange={(e) => this.OnChangeInput('email',e)} required type="email" name="email"></input></div>
                        {this.state.error == '1' && 
                            <span className="SignUpError" >Введён некоректный адрес электронной почты!</span>
                        } 
                    </div>

                    <div>
                        <div className="inputContainer"><input type="submit" value="Создать"></input></div>
                    </div>

                </div>
            </form>
        </div>
      );
    }
}

export default SignUp;