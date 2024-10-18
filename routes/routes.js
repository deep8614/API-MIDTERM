const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

//Route to import users
router.post('/import',userController.importUsers);

//Route to get all users
router.get('/',userController.getUsers);
