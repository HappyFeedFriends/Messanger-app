// dummy data
const hash = require('pbkdf2-password')()
let users = {
  admin: { name: 'tj' }
};

hash({ password: 'test' }, function (err, pass, salt, hash) {
  if (err) throw err;
  users.admin.salt = salt;
  users.admin.hash = hash;
});

module.exports.authenticate = function(name, pass, fn) {
    console.log('authenticating %s:%s', name, pass);
    var user = users[name];
    if (!user) return fn(new Error('cannot find user'));
    hash({ password: pass, salt: user.salt }, function (err, pass, salt, hash) {
      if (err) return fn(err);
      if (hash === user.hash) return fn(null, user)
      fn(new Error('invalid password'));
    });
}