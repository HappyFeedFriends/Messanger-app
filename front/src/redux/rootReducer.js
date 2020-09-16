import {combineReducers } from 'redux';
import { signInDefault, signUpDefault,InitializeAPPDefault } from './default';
import { APP_CHANGE_FORM_STATE, APP_CHANGE_FORM_LOADING_STATE, APP_CHANGE_LOADING_STATE, SIGNIN_CHANGE_LOGIN, SIGNIN_CHANGE_PASSWORD, SIGNUP_CHANGE_DATE_BIRTH, SIGNUP_CHANGE_EMAIL, SIGNUP_CHANGE_GENDER, SIGNUP_CHANGE_PASSWORD, SIGNUP_CHANGE_PASSWORD_REPAET, SIGNUP_CHANGE_USERNAME, APP_CHANGE_ERROR } from './types';

function APPReducer(state = InitializeAPPDefault,actions){
    switch (actions.type) {
        case APP_CHANGE_FORM_STATE:
            return {...state,formIndex:actions.payload.formIndex,IsOpenForms:actions.payload.IsOpenForms}   
        case APP_CHANGE_LOADING_STATE:
            return {...state,IsLoading:actions.payload} 
        case APP_CHANGE_FORM_LOADING_STATE:
            return {...state,FormLoading:actions.payload} 
        case APP_CHANGE_ERROR:
            return {...state,errorCode:actions.payload.errorCode,error:actions.payload.error}
        default:
            return state;
    }
}

function SignInReducer(state = signInDefault,actions){
    switch (actions.type) {
        case SIGNIN_CHANGE_PASSWORD:
            return {...state,password:actions.payload}    
        case SIGNIN_CHANGE_LOGIN:
            return {...state,username:actions.payload} 
        default:
            return state;
    }
}

function signUpReducer(state = signUpDefault,actions){

    switch (actions.type) {
        case SIGNUP_CHANGE_USERNAME:
            return  {...state,username:actions.payload}
        case SIGNUP_CHANGE_PASSWORD:
            return  {...state,password:actions.payload}
        case SIGNUP_CHANGE_PASSWORD_REPAET:
            return  {...state,password_repeat:actions.payload}
        case SIGNUP_CHANGE_EMAIL:
            return  {...state,email:actions.payload}
        case SIGNUP_CHANGE_GENDER:
            return {...state,gender:actions.payload}
        case SIGNUP_CHANGE_DATE_BIRTH:
            return {...state,dateBirth:actions.payload}
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    signInForm:SignInReducer,
    signUpForm:signUpReducer,
    app:APPReducer,
})