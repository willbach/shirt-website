const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-nodejs');

const sequelize = new Sequelize('mysql', 'Will', 'He110K!tty@Shirts', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

const User = sequelize.define('users', {
  _id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: Sequelize.STRING,
  password: Sequelize.STRING, //do this with bcrypt
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.STRING,
  street: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zip: Sequelize.STRING,
  neck: Sequelize.FLOAT,
  chest: Sequelize.FLOAT,
  waist: Sequelize.FLOAT,
  arms: Sequelize.FLOAT
}, 
{
    freezeTableName: true, 
});
User.beforeCreate(function(user, options, done) {
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return done(err);
    console.log('Salt: ' + 'getting ' + salt);
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return done(err);
      console.log('Info: ' + 'getting ' + hash);
      user.password = hash;
      console.log('Info: ' + 'password now is: ' + user.password);
      return done(null,user);
    });
  });
});
User.beforeValidate(function(user) {
  return bcrypt.compareSync(user.password, this.password);
});

sequelize
.sync({ force: true })
.then(function(err) {
  console.log('User table created!');
}, function (err) { 
  console.log('An error occurred while creating the table:', err);
});

module.exports = User;