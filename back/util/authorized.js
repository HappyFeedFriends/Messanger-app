const sha256 = require('js-sha256');
const db = require('../util/database');
const validator = require('validator');
module.exports.authenticate = function(name, pass, fn) {
}

module.exports.register = async function(name, pass,pass_copy,email,gender,dateBirth,fn) {
    if (pass !== pass_copy) {fn(  Error('0')); return}

    if (!validator.isEmail(email)) {fn( Error('1')); return}

    if (!validator.isLength(pass,{
        min:6,
    })) {fn(  Error('2') ); return}
    console.log(name)
    if (!validator.isLength(name,{
        min:4,
        max:31,
    })){ fn( Error('3') ); return};

    if (validator.matches(name,new RegExp('^[а-яА-Я0-9_.-]*$'))){ fn(Error('7')); return }

    if (!(gender == '0' || gender == '1')){ fn(Error('4')); return}
    if (!dateBirth){ fn(Error('5'));return}
    if (!validator.isDate(dateBirth)){ fn(Error('6'));return}

    const hashPassword = sha256(pass)

    
 
    await db.query(`INSERT INTO main."user"(
        username, password, email, login,gender,dateBirth)
        VALUES ($1, $2, $3, $4,$5,$6)`,[
            name,
            hashPassword,
            email,
            name,
            gender,
            dateBirth,
        ]) 
    fn();
}