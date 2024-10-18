// MongoDB connection
const mongoose = require("mongoose");
const fs = require('fs');

const InitiateMongoServer = async()=>{
    try{
        await mongoose.connect("mongodb+srv://deep8614:deep86@cluster0.xp9et.mongodb.net/");
    
    console.log("connected to DB");
    
    }catch(e){
        console.log(e);
        throw(e);
        }
    };

module.exports= InitiateMongoServer;