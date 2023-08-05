
const Signup = require('../models/userModels'); //import model
var path = require('path');

var pathOfLogin = path.join(__dirname, '..','/login.html');
var pathOfIndex = path.join(__dirname,'..', '/index.html');


//get root route
exports.getSignupForm =  (req, res) => {
    res.status(200).sendFile(pathOfIndex);
    
}

//post root route
exports.postUserDetails = async (req, res) => {

    console.log(req.body);
    try {
        let newSignup = await Signup.create(req.body);
        newSignup.save();
        if(newSignup){
            res.status(200).sendFile(pathOfLogin);
            console.log('user details submitted');
        }
        
    } catch (error) {
        console.log(error.message);
        res.send(`user details not submitted  ,${error.message}`);
    }

}

//get login route
exports.getUserLogin = (req, res) => {
    res.status(200).sendFile(pathOfLogin);
}

//post user login

exports.postUserLogin = async (req, res) => {
    const {username, password} = req.body;
    console.log(username,password);
    console.log(req.body);
    res.status(200).send('PROFILE PAGE');
}

