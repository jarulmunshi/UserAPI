var express=require('express');
var app=express();
var bodyparser = require('body-parser');

const user=require('./schema/user.schema');
const db =require('./config/database');
const userRoute=require('./routes/user.routes');
const multer = require('multer');
app.use(bodyparser.json());
//app.use(bodyparser())
app.use(bodyparser.urlencoded({extended: true}));
app.use('/',userRoute);



app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("server connected");
})