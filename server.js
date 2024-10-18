const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;



// Define Mongoose schema and model
const userSchema = new mongoose.Schema({
  userId: Number,
  userData: {
    name: String,
    age: Number,
    location: String,
    email: String
  }
});

const User = mongoose.model('User', userSchema);

// Load users.json and insert into MongoDb
const loadUsers = async () => {
  const usersFilePath = path.join(__dirname, 'users.json');
  const usersData = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

  const existingUsers = await User.find({});
  if (existingUsers.length === 0) {
    await User.insertMany(usersData);
    console.log('Users loaded into MongoDB');
  } else {
    console.log('Users already exist in the database');
  }
};

// Call function to load users on server startup
loadUsers();

// Middleware to parse JSON
app.use(express.json());

