import React, { Component } from 'react';
import cfg from '../config/api.json'

class SignUp extends Component {

    constructor(props){
        super(props)
        this.state = {
            signUpData:{
                username:'admin',
                password:'123',
                password_repeat:'123',
                // dateBirth:'',
                // gender:'',
                email:'ruslan776@list.ru',
            },
        }
    }

    async handleSubmit(event) {
        event.preventDefault();

        const api_path = cfg.api_path + 'signup';

        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        let response = await fetch(api_path, {
            method: 'POST',
            mode:'no-cors',
            headers: myHeaders,
            body: { 'email': 'admin@domain.com', 'password': '12345' },

        });
        console.log(response)

    }

    render() {
      return (
        <div class="ModalIconForms">
            <form onClick={(e) => this.handleSubmit(e)}>
                <div className="FormHeader row">
                    <h2>Создание Аккаунта</h2> 
                </div>
                <div className="FormContent column">
                    <div>
                        <span>Имя пользователя</span>
                        <div className="inputContainer username"><input required type="text" name="username"></input></div>
                    </div>

                    <div>
                        <span>Дата рождения</span>
                        <div className="inputContainer none"><input required type="date" name="username"></input></div>
                    </div>

                    <div>
                        <span>Пол</span>
                        <div className="inputContainer none row gender">
                            <label><input required name="gender" type="radio" value="0"/>Мужской</label>
                            <label><input required name="gender" type="radio" value="1"/>Женский</label>
                        </div>
                    </div>

                    <div>
                        <span>Пароль</span>
                        <div className="inputContainer password"><input required type="password"></input></div>
                    </div>

                    <div>
                        <span>Повторите пароль</span>
                        <div className="inputContainer password"><input required type="password"></input></div>
                    </div>

                    <div>
                        <span>Адрес электронной почты</span>
                        <div className="inputContainer email"><input required type="email"></input></div>
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