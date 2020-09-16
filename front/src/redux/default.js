export const signUpDefault = {
    username:'',
    password:'',
    password_repeat:'',
    dateBirth:'',
    gender:'',
    email:'',
}

export const signInDefault = { 
    username:'',
    password:'',
}

export const InitializeAPPDefault = {
    IsOpenForms:false,
    formIndex:1, // 0 - sign up 1 - sign in
    IsLoading:true,
    FormLoading:false,

    errorCode:0, // unique code for error 
    error:'', // description for error
}
