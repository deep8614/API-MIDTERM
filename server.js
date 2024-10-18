const express = require('express');
const userRoutes = require('./routes/routes'); 
const path = require('path');

// Initialize MongoDB connection
const InitiateMongoServer = require('./db');
InitiateMongoServer();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes); 

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});
  
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});