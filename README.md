# shirt-website

var bcrypt = require('bcrypt-nodejs');

var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres', 'post', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

var User = sequelize.define('users', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    htmlLink: Sequelize.STRING,
    sequence: Sequelize.INTEGER,
    createdAt: Sequelize.DATE,
    updatedAt:Sequelize.DATE,
    start: Sequelize.DATE,
    end: Sequelize.DATE
},
{
    freezeTableName: true,
    instanceMethods: {
        authenticate: function(value) {
            if (bcrypt.compareSync(value, this.password))
                return this;
            else
                return false;
        }
    }
});

function hashPassword(user) {
    // user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
    var passwordPromise = new Promise(function(resolve, reject) {
        bcrypt.genSalt(10, function(err, salt) {
            if(err)
                reject(err);
            bcrypt.hash(user.password, salt, null, function(err, hash) {
                if(err)
                    reject(err);
                user.password = hash;
                resolve(user.password);
            });
        })
    });
    return passwordPromise;
}

User.beforeCreate(hashPassword);

User.beforeUpdate(hashPassword);

sequelize
    .sync({ force: true })
    .then(function(err) {
        console.log('User table created!');
    }, function (err) {
        console.log('An error occurred while creating the table:', err);
    });

module.exports = User;
