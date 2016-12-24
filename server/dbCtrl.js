

const User = require('./userModel');
const Order = require('./orderModel');

const dbCtrl = {};

dbCtrl.updateUser = function(user) {

}
//add functionality to redirect user
dbCtrl.createUser = function(user) {
  const newUser = { username: user.username, password: user.password };
  return User.create(newUser)
  .then( () => console.log('created a new user'))
  .catch( (err) => { 
    console.error(err);
  });
}
//add functionality to redirect user
dbCtrl.deleteUser = function(user) {
  return User.destroy( {where: { username: user.username } } )
  .then( () => console.log('user deleted'))
  .catch( (err) => { 
    console.error(err);
  });
}

dbCtrl.login = function (user) {
  return User.findOne({ where: { username: user.username, password: user.password } } )
  .then( () => {
    console.log('found the user');
  })
  .catch( (err) => { 
    console.error(err);
  });
}

//submitting an order
dbCtrl.order = function(order) {
  const newOrder = {
    first_name: order.fname,
    last_name: order.lname,
    email: order.email,
    phone: order.phone,
    street: order.street,
    street2: order.street2,
    city: order.city,
    state: order.state,
    zip: order.zip,
    neck: order.neck,
    chest: order.chest,
    waist: order.waist,
    arms: order.arms,
    shirts: order.shirtnum,
    cost_per_shirt: 60,
    total: order.shirtnum * this.cost_per_shirt
  }
  return Order.create(newOrder);
}

module.exports = dbCtrl;