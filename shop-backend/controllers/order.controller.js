const product =require('../model/product.model')
const order =require('../model/order.model')
const mongoose = require('mongoose');

module.exports.postOrder= async function(req,res){
const orderLegnth= await order.countDocuments();
if(orderLegnth){
    order.findOne().sort('-orderId').exec(async function(err,docs){
        const data={
            orderId:docs.orderId+1,
            orderName:req.body.orderName,
            orderEmail:req.body.orderEmail,
            orderPhone:req.body.orderPhone,
            orderAddress:req.body.orderAddress,
            orderProvince:req.body.orderProvince,
            orderDistrict:req.body.orderDistrict,
            orderList:req.body.orderList,
            orderTotal:req.body.orderTotal,
            orderShipping:req.body.orderShipping,
            orderDate:req.body.orderDate,
        }
        const orderList=req.body.orderList;
        
        for(let i in orderList){
            console.log(orderList[i].amount)
            await product.findByIdAndUpdate(orderList[i].id,{
                $inc:{productSold: orderList[i].amount}
            })
            // function(err){
            //     if(err){
            //         console.log(err)
            //     }
            // })
        }
        await order.create(data);
        res.status(200).send("ok");
    })
}else{
   
    const data={
    orderId:1,
    orderName:req.body.orderName,
    orderEmail:req.body.orderEmail,
    orderPhone:req.body.orderPhone,
    orderAddress:req.body.orderAddress,
    orderProvince:req.body.orderProvince,
    orderDistrict:req.body.orderDistrict,
    orderList:req.body.orderList,
    orderTotal:req.body.orderTotal,
    orderShipping:req.body.orderShipping,
    orderDate:req.body.orderDate,
    }
    const orderList=req.body.orderList;
        for(let i in orderList){
            await product.findByIdAndUpdate(orderList[i].id,{
                $inc: {productSold :orderList[i].amount}
            })
            // function(err){
            //     if(err){
            //         console.log(err)
            //     }
            // })
        }
        await order.create(data);
        res.status(200).send("ok");
}
}