const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

const Order = sequelize.define('orders', {
  _id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  // user_id: Sequelize.INTEGER,
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.STRING,
  street: Sequelize.STRING,
  street2: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zip: Sequelize.STRING,
  neck: Sequelize.FLOAT,
  chest: Sequelize.FLOAT,
  waist: Sequelize.FLOAT,
  arms: Sequelize.FLOAT,
  color: Sequelize.STRING,
  shirts: Sequelize.INTEGER,
  cost_per_shirt: Sequelize.FLOAT,
  total: Sequelize.FLOAT
});

sequelize
.sync({ force: true })
.then(function(err) {
  console.log('Order table created!');
}, function (err) { 
  console.log('An error occurred while creating the table:', err);
});

module.exports = Order;