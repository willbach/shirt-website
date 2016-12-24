const dbCtrl = require('./dbCtrl');
const emailCtrl = require('./emailCtrl');

const userCtrl = {};
//controls for GET
userCtrl.showLogin = function(req, res) {
//send to login page
}

userCtrl.showContact = function(req, res) {
//send to Contact Us page
}

//controls for POST
userCtrl.createUser = function(req, res) {
  console.log('receiving a request to create a user ', req.body);
  let newUser = {username: req.body.username, password: req.body.password1};
  dbCtrl.createUser(newUser);
}
userCtrl.login = function(req, res) {
  dbCtrl.login(req.body);
}

userCtrl.contact = function(req, res) {
  console.log('contact us form submitted ', req.body);
  emailCtrl.contactUs(req.body);
  res.end('successful message');
}

//controls for PUT
userCtrl.update = function(req, res) {
//update user info
}

module.exports = userCtrl;