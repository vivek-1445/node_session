const express = require('express');

const routes = express.Router();

const authController = require('../controllers/authController');

routes.get('/',authController.login);
routes.get('/register',authController.register);
routes.post('/save-user',authController.saveData);



console.log("auth routing is running users");
module.exports = routes;
