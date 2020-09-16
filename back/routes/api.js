const express = require('express')
const router = express.Router();
var jwt = require('jsonwebtoken');
const SECRET_KEY = require('../config/secret.json').secret_auth_key;
const ExampleJsonResponse = require('../config/data_format.json');
const sha256 = require('js-sha256');
const db = require('../util/database');
const validator = require('validator');

router.post('/auth/signin',async function(req, res){
  const send = res.status(200)
  const data = { ...ExampleJsonResponse };
  const {username, password} = req.body;
  if (!username || !password) {
    data.statusCode = 1;
    data.errorCode = 20
    data.error = ['Ошибка авторизации. Пользователь с данным E-MAIL-ом не зарегистрирован'];
    send.send(data)
    return;
  }

  const userFind = (await db.query(`SELECT id,email,password,login
	FROM main."user"
	where (email = $1 or login = $2) and password = $3`,[
        username,
        username,
        sha256(password),
  ])).rows;

  if (userFind.length < 1) {
    data.statusCode = 1;
    data.errorCode = 20
    data.error = ['Ошибка авторизации. Пользователь с заданным логином и паролем не существует'];
    send.send(data)
    return;
  }

  data.data = {
    token:jwt.sign({id:userFind[0].id}, SECRET_KEY)
  } 
  send.send(data)
  
  

});
router.post('/auth/signup',async function(req, res){
  const send = res.status(200)
  const data = { ...ExampleJsonResponse }
  const {username, password, password_repeat,dateBirth,gender,email} = req.body;
  if (password !== password_repeat) {
    data.statusCode = 1;
    data.errorCode = 1
    data.error = ['Ошибка регистрации. Пароли не совпадают!'];
    send.send(data)
    return;
  }

  if (!validator.isEmail(email)) {
    data.statusCode = 1;
    data.errorCode = 2
    data.error = ['Введён некорректный E-MAIL!'];
    send.send(data)
    return;   
  } 

  if (!validator.isLength(password,{min:6})) {
    data.statusCode = 1;
    data.errorCode = 3
    data.error = ['Введён некорректный пароль. Пароль должен быть длиной от 6 символов.'];
    send.send(data)
    return;   
  }

  if (!validator.isLength(username,{
    max:31,
    min:4,
  })){
    data.statusCode = 1;
    data.errorCode = 4
    data.error = ['Введено некорректное имя пользователя. Имя пользователя должно быть длиной от 4 до 31 символов'];
    send.send(data)
    return;   
  }

  if (validator.matches(username,new RegExp('^[а-яА-Я0-9_.-]*$'))){
    data.statusCode = 1;
    data.errorCode = 4
    data.error = ['Введено некорректное имя пользователя. Имя пользователя не должно использовать кириллицу или начинаться с цифры'];
    send.send(data)
    return;   
  }

  if (!(gender == 0 || gender == 1)){
    data.statusCode = 1;
    data.errorCode = 5
    data.error = ['Введён некорректный пол.'];
    send.send(data)
    return;  
  }

  if (!validator.isDate(dateBirth)){
    data.statusCode = 1;
    data.errorCode = 6
    data.error = ['Введёно некорректная дата рождения!'];
    send.send(data)
    return; 
  }

  let response = await db.query(`SELECT login, email 
	FROM main."user"
	where email = $1 or login = $2`,[
        email,
        username,
  ]);

  const email_count = response.rows.filter(row => row.email.toLowerCase() == email.toLowerCase()).length;
  const username_count = response.rows.filter(row => row.login.toLowerCase() == username.toLowerCase()).length;

  if (email_count >  0){
    data.statusCode = 1;
    data.errorCode = 2
    data.error = ['Данный почтовый адрес уже используется!'];
    send.send(data)
    return; 
  }

  if (username_count >  0){
    data.statusCode = 1;
    data.errorCode = 4
    data.error = ['Данное имя пользователя уже используется!'];
    send.send(data)
    return; 
  }
  
  await db.query(`INSERT INTO main."user"(
    username, password, email, login,gender,dateBirth)
    VALUES ($1, $2, $3, $4, $5, $6)`,[
        username,
        sha256(password),
        email,
        username,
        gender,
        dateBirth,
  ]);
  data.data = {
    id:1,
  }
  send.send(data)

});
 
router.use('/v1',(req, res, next) => {
  let isAuth = !!req.cookies.auth;
  console.log(req.cookies.auth)
  if (req.cookies.auth){
    jwt.verify(req.cookies.auth,SECRET_KEY,(err) => {
        isAuth = !!!err;
    })
  }
  if (isAuth)
    next();
  else {
    res.sendStatus(401)
  }
});
router.get('/v1/user',async function(req, res){
  let data = await jwt.verify(req.cookies.auth,SECRET_KEY)
  let userID = data.id
  let response = await db.query(`SELECT id, username,avatar_url 
	FROM main."user"
	where id = $1`,[
    userID,
  ]);
  console.log(data)
  res.status(200).send(response.rows[0]);
});


module.exports = router;
