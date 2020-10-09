var jwt = require('jsonwebtoken');
const SECRET_KEY = require('./config/secret.json').secret_auth_key;
var cookie = require('cookie')
const db = require('./util/database')

module.exports.connection = (client,io) => {
    console.log('a user connected', client.id);
    client.on('send_message',async (data,callback) => {

        const token = cookie.parse(client.request.headers.cookie).auth

        const jwtDecoded =  jwt.verify(token,SECRET_KEY)
        const authorID = jwtDecoded.id

        const returnData = (await db.query(`INSERT INTO 
            main.messages( message_channel_id, content, author_id ) VALUES ($1, $2, $3)
            RETURNING id,message_channel_id, content, author_id`,
            [data.channel_id,data.data,authorID]
        )).rows[0];

        io.emit('on_message', returnData);

    })

    client.on('disconnect', async function() {
        console.log('a user disconnected', client.id);
    });
} 