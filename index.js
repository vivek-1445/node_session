const express = require('express');

const app = express();

const port = 3002;
const db = require('./config/mongoose');

app.use(express.static('./assets'));
app.use(express.urlencoded());
app.use('/',require('./routes'));

const path = require('path');
app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));

app.listen(port,function(err){
    if(err){
        console.log('somthing went wrong in connection port');
        return;
    }
    console.log('your server running on',port);

})