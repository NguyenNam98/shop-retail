const mongoose= require('mongoose');

var contactSchema=new mongoose.Schema({
    contactName:String ,
    contactEmail:String ,
    contactSubject: String,
    contactMessage:String 
  
},
{
    versionKey: false
}
);

var Contact= mongoose.model('Contact',contactSchema,'contact');
module.exports= Contact;