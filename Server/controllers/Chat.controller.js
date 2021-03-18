const Chat =require('../model/Chat.model');

module.exports.index= async function(req,res){
    var chat =await Chat.find();
    res.json(chat)
}
module.exports.new=async function(req,res){
    var sessionId = req.body.sessionId;
	var name = req.body.chatName;
	var email = req.body.chatEmail;
	var content = req.body.chatContent;

	const data = {
		sessionId: sessionId,
		chatName: name,
		chatEmail: email,
		chatContent: content
	}
    await Chat.create(data);
    res.status(200).send('created a new chat member');
}
module.exports.data= async function(res,req){
    const sessionId=req.params.id;
    Chat.find({sessionId:sessionId}).then(function(chat){
        res.json(chat);
    })
}