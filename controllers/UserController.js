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
