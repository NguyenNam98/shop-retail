const user = require('../model/user.model');

const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.index=function(req,res){
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
      } else {
        res.send({ loggedIn: false });
      }
}

module.exports.userPost=async function(req,res){
  const email= req.body.email;
  const password=req.body.password;
  var result= await user.find({email:email}); 
  console.log(result);
  if (result.length > 0) {
    bcrypt.compare(password, result[0].password, (err,response) => {
      if (response) {
        const id=result[0].id;
        const token=jwt.sign({id},"jwtsecret",{
          expiresIn:100,
        });
        req.session.user = result;
        res.json({auth:true, token:token, result:result});
      } else {
        res.json({auth:false,message: "Wrong username/password combination!"});
      }
    });
  } else {
    res.json({auth:false, message: "User doesn't exist"});
   
  }
}
module.exports.registerPost=async function(req,res){
  const fisrtName=req.body.fisrtName;
  const lastName=req.body.lastName;
  const email=req.body.email;
  const password=req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err)
    }
    var data= {
      first_name:fisrtName,
      last_name:lastName,
      email:email,
      password:hash,
      userRole:'user'
    }
    user.create(data);
    
  })

}