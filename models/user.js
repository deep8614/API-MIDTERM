const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: {type:Number},
    userData: {
      name: {type:String},
      age: {type:Number},
      location: {type:String},
      email: {type:String}
    }
  });

const User = mongoose.model('Users',userSchema);
module.exports = User;