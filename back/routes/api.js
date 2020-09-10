const util = require('../util/authorized');
const express = require('express')
const router = express.Router();
var bodyParser = require('body-parser')

router.post('/signup',bodyParser.json(),async function(req, res){
  await util.register(req.body.username, req.body.password,req.body.password_repeat,req.body.email,(err) => {
    if (err){
      res.status(200).send(err.message)
      return;
    }
    res.status(200).send('-1');
  });
});

module.exports = router;
