const express = require('express');

const route = express.Router();

const homecontroller = require('../controllers/homeController');
const authController = require('../controllers/authController');
 
route.get('/',authController.login);
route.get('/home',homecontroller.home);

route.get('/register',authController.register);
route.post('/save-user',authController.saveData);


route.post('/login-user',authController.loginUser);

console.log('route is running');

module.exports = route;

