const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes'); //user routes


app.use(express.urlencoded({extended:true}));//access form data


//user routes
app.use('/' , userRoutes);



module.exports = app;