const dotenv = require('dotenv'); //env - variables
const app = require('./app'); //import app
const dbConnection = require('./config/dbConnection'); //import dbCOnnection

const PORT = process.env.PORT || 4000

dotenv.config({path:'./config/config.env'}); //config path

dbConnection();


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})