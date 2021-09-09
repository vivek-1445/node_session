const express = require('express');

const app = express();

const port = 3002;

app.listen(port,function(err){
    if(err){
        console.log("somthing went wrong in db connection")
    }

    console.log("your server running on",port);

});

