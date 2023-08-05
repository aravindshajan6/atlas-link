const mongoose = require('mongoose'); //mongodb connection
const config = require("./config"); //atlas URI

const dbUrl = config.dbUrl; 

const dbConnection = () => {
    
    //atlas connection
   
        mongoose.connect(`${dbUrl}`,
         {useNewUrlParser:true}, 
         {useUnifiedTopology:true})
        .then((data) => console.log(`DB connected with ${data.connection.host}`))
        .catch((err) => console.log(err.message));

        // compass connection
        // mongoose.connect('mongodb://127.0.0.1:27017/sampleSignup',
        //  {useNewUrlParser:true}, 
        //  {useUnifiedTopology:true})
        // .then((data) => console.log(`DB connected with ${data.connection.host}`))
        // .catch((err) => console.log(err.message));

}

module.exports = dbConnection;