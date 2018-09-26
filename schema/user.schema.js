const mongo=require('mongoose');
const {Schema} = require('mongoose');
const userSchema=new mongo.Schema({
    name:{
      type:String
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    age:{
        type:Number
    },
    imageName:{
        type:String
    },
    temp:{
        type:Number,
        defaultValue:0
    }
})

let user=mongo.model('user',userSchema);
module.exports=user;
