const sha256 = require('js-sha256');
const db = require('../util/database');
const validator = require('validator');
module.exports.authenticate = function(name, pass, fn) {
}

module.exports.register = async function(name, pass,pass_copy,email,fn) {
    if (pass !== pass_copy) fn(  Error('Пароли не совпадают!'));

    if (!validator.isEmail(email)) fn( Error('Введите правильный почтовый адрес!'));

    if (!validator.isLength(pass,{
        min:6,
    })) fn(  Error('Пароль должен быть не менее 6 символов!') );

    if (!validator.isLength(name,{
        min:4,
        max:32,
    })) return Error('Логин должен быть не меньше 4 символов и не больше 16');
    const hashPassword = sha256(pass)

    await db.query(`INSERT INTO main."user"(
        username, password, email, login)
        VALUES ($1, $2, $3, $4)`,[
            name,
            hashPassword,
            email,
            name,
        ]) 
        fn();
}