const mongoose= require('mongoose');

var userSchema=new mongoose.Schema({

    first_name:String,
    last_name:String,
    email:String,
    password:String,
    userRole:String,
    userImg:String,
    userAddress: String,
    phoneNumber:String
});

var User= mongoose.model('User',userSchema,'users');
module.exports= User;