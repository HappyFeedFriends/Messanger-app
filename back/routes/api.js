const util = require('../util/authorized');
const express = require('express')
const router = express.Router();

router.post('/register', async function(req, res){
  await util.register(req.body.username, req.body.password,req.body.password_copy,req.body.email,(err) => {
    if (err){
      req.session.error = err.message;
      return;
    }
  });
});

module.exports = router;
