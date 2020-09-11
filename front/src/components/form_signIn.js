import React, { Component } from 'react';
export default class SignIn extends Component{



    render(){
        return (
        <form onSubmit={(e) => this.props.handleSubmit(e)}>
            <div className="FormContent column">

                <div>
                    <span>Имя пользователя</span>
                    <div className="inputContainer username"><input onChange={(e) => this.props.OnChangeInput('username',e)}  required type="text" name="username"></input></div> 
                </div>

                <div className="password_container">
                    <span>Пароль</span>
                    <div className="inputContainer password"><input onChange={(e) => this.props.OnChangeInput('password',e)} required type="password" name="password"></input></div>
                </div>
                <div>
                    <div className="inputContainer"><input type="submit" value="Создать"></input></div>
                </div>

            </div>
        </form>
        );
    }
}