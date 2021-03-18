const mongoose= require('mongoose');

var emailSchema=new mongoose.Schema({
    emailSubcribe:String
},
{
    versionKey: false
}
);

var EmailSubcribe= mongoose.model('EmailSubcribe',emailSchema,'EmailSubcribe');
module.exports= EmailSubcribe;