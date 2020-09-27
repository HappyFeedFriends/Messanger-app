const express = require('express')
const router = express.Router();
var jwt = require('jsonwebtoken');
const SECRET_KEY = require('../config/secret.json').secret_auth_key;
const ExampleJsonResponse = require('../config/data_format.json');
const sha256 = require('js-sha256');
const db = require('../util/database');
const validator = require('validator');
const { route } = require('../app');

router.post('/auth/signin',async function(req, res){
  const data = { ...ExampleJsonResponse };
  const {username, password} = req.body;
  if (!username || !password) {
    data.statusCode = 1;
    data.errorCode = 20
    data.error = ['Ошибка авторизации. Пользователь с данным E-MAIL-ом не зарегистрирован'];
    res.send(data)
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
    res.send(data)
    return;
  }

  data.data = {
    token:jwt.sign({id:userFind[0].id}, SECRET_KEY)
  } 
  res.send(data)
  
  

});
router.post('/auth/signup',async function(req, res){
  const send = res
  const data = { ...ExampleJsonResponse }
  const {username, password, password_repeat,dateBirth,gender,email} = req.body;
  if (password !== password_repeat) {
    data.statusCode = 1;
    data.errorCode = 1
    data.error = ['Ошибка регистрации. Пароли не совпадают!'];
    res.send(data)
    return;
  }

  if (!validator.isEmail(email)) {
    data.statusCode = 1;
    data.errorCode = 2
    data.error = ['Введён некорректный E-MAIL!'];
    res.send(data)
    return;   
  } 

  if (!validator.isLength(password,{min:6})) {
    data.statusCode = 1;
    data.errorCode = 3
    data.error = ['Введён некорректный пароль. Пароль должен быть длиной от 6 символов.'];
    res.send(data)
    return;   
  }

  if (!validator.isLength(username,{
    max:31,
    min:4,
  })){
    data.statusCode = 1;
    data.errorCode = 4
    data.error = ['Введено некорректное имя пользователя. Имя пользователя должно быть длиной от 4 до 31 символов'];
    res.send(data)
    return;   
  }

  if (validator.matches(username,new RegExp('^[а-яА-Я0-9_.-]*$'))){
    data.statusCode = 1;
    data.errorCode = 4
    data.error = ['Введено некорректное имя пользователя. Имя пользователя не должно использовать кириллицу или начинаться с цифры'];
    res.send(data)
    return;   
  }

  if (!(gender == 0 || gender == 1)){
    data.statusCode = 1;
    data.errorCode = 5
    data.error = ['Введён некорректный пол.'];
    res.send(data)
    return;  
  }

  if (!validator.isDate(dateBirth)){
    data.statusCode = 1;
    data.errorCode = 6
    data.error = ['Введёно некорректная дата рождения!'];
    res.send(data)
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
    res.send(data)
    return; 
  }

  if (username_count >  0){
    data.statusCode = 1;
    data.errorCode = 4
    data.error = ['Данное имя пользователя уже используется!'];
    res.send(data)
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
  res.send(data)

});

router.use('/v1',(req, res, next) => {
  let isAuth = !!req.cookies.auth;
  if (req.cookies.auth){
    jwt.verify(req.cookies.auth,SECRET_KEY,(err) => {
        isAuth = err === null;
    })
  }
  if (isAuth)
    next();
  else {
    res.sendStatus(401)
  }
});

router.get('/v1/user',async function(req, res){
  let jwtV = await jwt.verify(req.cookies.auth,SECRET_KEY)
  let userID = jwtV.id
  const data = { ...ExampleJsonResponse }
  let response = await db.query(`SELECT id, username,avatar_url 
	FROM main."user"
	where id = $1`,[
    userID,
  ]);

  let chats = await db.query(`SELECT id, author_id,companion_id 
	FROM main."message_channel"
	where author_id = $1 or companion_id = $1`,[
    userID,
  ]); 
  response.rows[0].chats = chats.rows;
  data.data = response.rows[0]
  res.send(data);
});

router.post('/v1/getChatInfo',async (req, res) => {
  let chatID = req.body.id
  console.log('chat id',chatID)
  if (!chatID){
    res.sendStatus(404)
    return;
  }
  const data = { ...ExampleJsonResponse }
  let channel_data = (await db.query(`SELECT id, author_id,companion_id 
	FROM main."message_channel"
	where id = $1`,[
    chatID,
  ])).rows[0];
  let author_data = (await db.query(`SELECT id, username,avatar_url 
	FROM main."user"
	where id = $1`,[
    channel_data.author_id,
  ])).rows[0];

  let companiom_data = (await db.query(`SELECT id, username,avatar_url 
	FROM main."user"
	where id = $1`,[
    channel_data.companion_id,
  ])).rows[0];

  let chat_messages = (await db.query(`SELECT message_channel_id, id, content, author_id
	FROM main.messages where message_channel_id = $1`,[
    chatID,
  ])).rows

  const _data = {
    author:author_data,
    companion:companiom_data,
    chatMessages:chat_messages,
  }
  data.data = _data
  res.send(data)
})


module.exports = router;
