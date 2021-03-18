const contact = require('../model/contact.model');

module.exports.contactPost=async function(req,res){
    const data=req.body;
    await contact.create(data);
    res.status(200).send("ok");
}