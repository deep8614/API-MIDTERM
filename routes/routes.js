const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

//Route to import users
router.post('/import',userController.importUsers);

//Route to get all users
router.get('/',userController.getUsers);

//Route to get user by Id
router.get('/:id',userController.getUsersById);

//Route to get user by Id
router.get('/location/:location',userController.getUsersByLocation);

module.exports = router;