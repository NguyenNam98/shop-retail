const mongoose= require('mongoose');

var orderSchema=new mongoose.Schema({
    orderId:Number,
    orderName:String,
    orderEmail:String,
    orderPhone:String,
    orderAddress:String,
    orderProvince:String,
    orderDistrict:String,
    orderList:Array,
    orderTotal:Number,
    orderShipping:String,
    orderDate:String
},
{
    versionKey: false
}
);

var Order= mongoose.model('Order',orderSchema,'order');
module.exports= Order;