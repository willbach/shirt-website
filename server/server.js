const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const userCtrl = require('./userCtrl');
const orderCtrl = require('./orderCtrl');

app.use(bodyParser.urlencoded({extended: true}), bodyParser.json());
app.use(express.static(__dirname +'./../node_modules/'));
app.use(express.static(__dirname +'./../client'));
app.use(express.static(__dirname +'./../node_modules/bootstrap'));

//serve static pages
app.get('/contact', userCtrl.showContact);
app.get('/login', userCtrl.showLogin);

//logs user in and order shirts
app.post('/create-user', userCtrl.createUser); //still need to do Angular
app.post('/login', userCtrl.login);
app.post('/review-order', orderCtrl.reviewOrder);
app.post('/order', orderCtrl.order);
app.post('/contact', userCtrl.contact);

//update user info
app.put('/update', userCtrl.update);



app.listen(3000);