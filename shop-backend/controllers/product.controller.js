
const product =require('../model/product.model')
const mongoose = require('mongoose');

module.exports.index = async function(req, res) {
	var products = await product.find();
	res.json(products);
}
module.exports.productId= function(req,res){
  var id= req.params.id;
  product.find({_id:id}).then(function(products){
      res.json(products);
  });
  
}
module.exports.reviewProduct = async function(req,res){
  var id=req.params.id
  
  product.findOneAndUpdate({_id:id},{$push:{productVote: req.body}}, function(err){ } );
  res.status(200).send("ok");

}