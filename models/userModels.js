//user model details  
const mongoose = require('mongoose');

//create Schema for collection
const signupSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, 'please enter your username'],
        minlength:[3, 'username must be minimum 3 letters'],
        unique:[true, 'username already exists']
    },
    password:{
        type:String,
        required:[true, 'please enter your password'],
        minlength:[3, 'password must be minimum 3 letters'],
    }
});

//create model for Schema
let Signup = mongoose.model('signupInfo', signupSchema);

module.exports = Signup;