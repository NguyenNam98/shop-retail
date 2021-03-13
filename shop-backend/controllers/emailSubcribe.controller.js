const emailSubcribe = require('../model/email.model');

module.exports.contactPost=async function(req,res){
    const data=req.body;
    await emailSubcribe.create(data);
    res.status(200).send("ok");
}