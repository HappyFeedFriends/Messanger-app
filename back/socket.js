var jwt = require('jsonwebtoken');
const SECRET_KEY = require('./config/secret.json').secret_auth_key;
var cookie = require('cookie')
const db = require('./util/database')

module.exports.connection = client => {
    console.log('a user connected', client.id);
    client.on('send_message',async data => {

        const token = cookie.parse(client.request.headers.cookie).auth

        const jwtDecoded =  jwt.verify(token,SECRET_KEY)
        const authorID = jwtDecoded.id
        console.log('test')
        console.log(await db.query(`INSERT INTO main.messages(
            message_channel_id, content, author_id)
            VALUES ($1, $2, $3)`,
            [1,data.data,authorID]
        ));
    })

    client.on('disconnect', async function() {
        console.log('a user disconnected', client.id);
    });
} 