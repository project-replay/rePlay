require('dotenv').config() //store sensitive data
const express = require('express');//first we get express
const session = require('express-session'); //to store the cookies
require('./mongodbs/app')
const cors = require('cors'); //cross origin request
const morgan = require('morgan') // middleware to log http requests and errors, simplifies the process
const app = express();
const MongoDBStore = require('connect-mongodb-session')(session); //to store the session information inside a cookie
const store = new MongoDBStore({ //store set-up
    uri: process.env.MONGODB_URI,
    collection: 'mySessions'
});
app.use(session({ //to store user information 
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
}))
app.use(morgan());
app.use(cors());
// app.use(urlencoded({extended:true}));
app.use(express.json());

// ====================================
// ROUTES
// ====================================

// Users Controller
const usersController = require('./controllers/usersController')

const Port = process.env.PORT || 3001
app.listen(Port , ()=>{
    console.log('express')
})