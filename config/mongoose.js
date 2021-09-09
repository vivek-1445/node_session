const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/session_def");

const db = mongoose.connection;

db.on('error',console.error.bind(console,'somthing went wrong in db connection'));

db.once('open',function (){
    console.log("data base connected");
})

