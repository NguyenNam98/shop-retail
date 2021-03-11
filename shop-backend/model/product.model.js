const mongoose= require('mongoose');

var userSchema=new mongoose.Schema({
    _id:String,
    productImg:Array,
    productSize:Array,
    productVote:Array,
    ratingImg:String,
    productName:String,
    productSale:Number,
    productPrice:Number,
    productSex:String,
    productDate:Date,
    productCate:String,
    productDes:String,
    productSold:Number,
    productGroupCate: String,
    productFinalPrice:Number,
   
},
{
    versionKey: false
}
);

var Product= mongoose.model('Product',userSchema,'products');
module.exports= Product;