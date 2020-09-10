const util = require('../util/authorized');
const express = require('express')
const router = express.Router();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
router.post('/signup',jsonParser,async function(req, res){
  console.log(req.headers["content-type"])
  console.log(req.body)
  res.status(200)
  return;
  // await util.register(req.body.username, req.body.password,req.body.password_repeat,req.body.email,(err) => {
  //   if (err){
      
  //     req.session.error = err.message;
  //     res.status(400)
  //     return;
  //   }
  //   res.status(200)
  // });
});

module.exports = router;
