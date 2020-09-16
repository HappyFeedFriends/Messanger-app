import {INITIALIZE_APP, APP_CHANGE_FORM_LOADING_STATE, APP_CHANGE_LOADING_STATE, SIGNIN_CHANGE_LOGIN,SIGNIN_CHANGE_PASSWORD,SIGNUP_CHANGE_EMAIL, SIGNUP_CHANGE_PASSWORD, SIGNUP_CHANGE_PASSWORD_REPAET, SIGNUP_CHANGE_USERNAME,SIGNUP_CHANGE_GENDER,SIGNUP_CHANGE_DATE_BIRTH, APP_CHANGE_FORM_STATE, APP_CHANGE_ERROR} from './types'
import cfg from '../config/api.json'
import Cookies from 'universal-cookie'
const cookies = new Cookies()
// APP
export function InitAPP(){
    return {
        type:INITIALIZE_APP
    }
}

export function ChangeErrorAPP(errorCode,error){
    return {
        type:APP_CHANGE_ERROR,
        payload:{
            errorCode:errorCode,
            error:error,
        },
    }
}

export function ChangeFormState(IsOpenForms,formIndex = 0){
    return {
        type:APP_CHANGE_FORM_STATE,
        payload:{
            formIndex:formIndex,
            IsOpenForms:IsOpenForms,
        },
    }
}

export function ChangeFormLoadingState(state){
    return {
        type:APP_CHANGE_FORM_LOADING_STATE,
        payload:state,
    }
}


export function ChangeLoadingState(state){
    return {
        type:APP_CHANGE_LOADING_STATE,
        payload:state,
    }
}


// SIGN UP FORM
export function SignUpChangeUserName(value){
    return {
        type:SIGNUP_CHANGE_USERNAME,
        payload:value,
    }
}

export function SignUpChangePassword(value){
    return {
        type:SIGNUP_CHANGE_PASSWORD,
        payload:value,
    }
}

export function SignUpChangePasswordRepeat(value){
    return {
        type:SIGNUP_CHANGE_PASSWORD_REPAET,
        payload:value,
    }
}

export function SignUpChangeGender(value){
    return {
        type:SIGNUP_CHANGE_GENDER,
        payload:value,
    }
}

export function SignUpChangeDateBirth(value){
    return {
        type:SIGNUP_CHANGE_DATE_BIRTH,
        payload:value,
    }
}


export function SignUpChangeEmail(value){
    return {
        type:SIGNUP_CHANGE_EMAIL,
        payload:value,
    }
}

// SIGN IN FORM

export function SignInChangeLogin(value){
    return {
        type:SIGNIN_CHANGE_LOGIN,
        payload:value,
    }
}

export function SignInChangePassword(value){
    return {
        type:SIGNIN_CHANGE_PASSWORD,
        payload:value,
    }
}

// REQUESTS

export function RequestSignUp(){
    return async (dispatch, getState) => {
        const { signUpForm } = getState()
        console.log(signUpForm)
        dispatch(ChangeFormLoadingState(true))
        dispatch(ChangeErrorAPP(0,''))
        const response = await (await fetch(cfg.api_auth + 'signup',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(signUpForm),
        })).json()
        dispatch(ChangeErrorAPP(response.errorCode,response.error[0]))
        dispatch(ChangeFormLoadingState(false))
    }
}

export function RequestSignIn(){
    return async (dispatch, getState) => {
        const { signInForm } = getState()
        dispatch(ChangeFormLoadingState(true))
        dispatch(ChangeErrorAPP(0,''))
        const response = await (await fetch(cfg.api_auth + 'signin',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(signInForm),
        })).json()
        console.log(response)
        dispatch(ChangeErrorAPP(response.errorCode,response.error[0]))
        dispatch(ChangeFormLoadingState(false))

        if (response.statusCode === 0){
            cookies.set('auth',response.data['token']);
        }
    }
}


