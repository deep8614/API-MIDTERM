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

