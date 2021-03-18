const mongoose= require('mongoose');

var orderSchema=new mongoose.Schema({
    newImg:String ,
    newTime:String ,
    newCate: String,
    newTitle:String ,
    newContent:String,
    newView: Number
},
{
    versionKey: false
}
);

var News= mongoose.model('News',orderSchema,'news');
module.exports= News;