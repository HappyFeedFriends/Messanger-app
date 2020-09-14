import React, { Component } from 'react';
export default class SignUp extends Component{



    render(){
        return (
        <form className="formSignUp" onSubmit={(e) => this.props.handleSubmit(e)}>
            <div className="FormContent column">

                <div>
                    <span>Имя пользователя</span>
                    <div className="inputContainer username"><input onChange={(e) => this.props.OnChangeInput('username',e)}  required type="text" name="username"></input></div>
                    {this.props.errorCode == 4 && <span className="SignUpError" >{this.props.error}</span>} 
                </div>

                <div>
                    <span>Дата рождения</span>
                    <div className="inputContainer none"><input onChange={(e) => this.props.OnChangeInput('dateBirth',e)} required type="date" name="dateBirth"></input></div>
                    {this.props.errorCode == 6 && <span className="SignUpError" >{this.props.error}</span>}
                </div>

                <div>
                    <span>Пол</span>
                    <div className="inputContainer none row gender">
                        <label><input onChange={(e) => this.props.OnChangeInput('gender',e)} required name="gender" type="radio" value="0"/>Мужской</label>
                        <label><input onChange={(e) => this.props.OnChangeInput('gender',e)} required name="gender" type="radio" value="1"/>Женский</label>
                        {this.props.errorCode == 5 && <span className="SignUpError" >{this.props.error}</span>} 
                    </div>
                </div>

                <div className="password_container">
                    <span>Пароль</span>
                    <div className="inputContainer password"><input onChange={(e) => this.props.OnChangeInput('password',e)} required type="password" name="password"></input></div>
                    {this.props.errorCode == 3 && <span className="SignUpError" >{this.props.error}</span>} 
                </div>

                <div>
                    <span>Повторите пароль</span>
                    <div className="inputContainer password"><input onChange={(e) => this.props.OnChangeInput('password_repeat',e)} required type="password" name="password_repeat"></input></div>
                    {this.props.errorCode == 1 && <span className="SignUpError" >{this.props.error}</span>} 
                </div>

                <div>
                    <span>Адрес электронной почты</span>
                    <div className="inputContainer email"><input onChange={(e) => this.props.OnChangeInput('email',e)} required type="email" name="email"></input></div>
                    {this.props.errorCode == 2 && <span className="SignUpError" >{this.props.error}</span>} 
                </div>

                <div>
                    <div className="inputContainer"><input type="submit" value="Создать"></input></div>
                </div>

            </div>
        </form>
        );
    }
}