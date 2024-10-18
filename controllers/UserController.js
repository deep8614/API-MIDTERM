const User = require('../models/user');
const fs =require('fs');

// GET /users: Retrieve all user profiles
exports.importUsers =  async (req, res) => {
    try{
        const usersData = JSON.parse(fs.readFileSync('./../users.json', 'utf-8')); // Read data from users.json
        const count = await User.countDocuments();

        if (count === 0) {
            await User.create(usersData);
            console.log('Users loaded into MongoDB');
        } else {
            console.log('Users already exist in the database');
        }
    }
    catch(e){
        console.error('Error importing data', e);
    }
};

// GET /users: Retrieve all user profiles
exports.getUsers =  async (req, res) => {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: 'Failed to retrieve users' });
    }
};
  
  
  // GET /users/:id: Retrieve a specific user by their ID
exports.getUsersById =  async (req, res) => {
      try {
        const user = await User.findOne({ userId: req.params.id });
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
      } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve user' });
      }
};
    
    
  //Retrieve users based on their location
exports.getUsersByLocation =  async (req, res) => {
      try {
        console.log(req.params.location);
        const users = await User.find({ 'userData.location': req.params.location });
        if (users.length === 0) {
          return res.status(404).json({ error: 'NUser not found' });
        }
        res.json(users);
      } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve users' });
      }
};
  