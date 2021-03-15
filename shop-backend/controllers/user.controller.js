const user = require('../model/user.model');
const jwt =require('jsonwebtoken')

const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.index= async function(req,res){
    // if (req.session.user) {
    //     res.send({ loggedIn: true, user: req.session.user });
    //   } else {
    //     res.send({ loggedIn: false });
    //   }
  const userId=req.userId;
  var result= await user.findOne({_id:userId});
  res.send({auth: true,user:result});
}

module.exports.userPost=async function(req,res){
  const email= req.body.email;
  const password=req.body.password;
  var result= await user.find({email:email}); 
 
  if (result.length > 0) {
    bcrypt.compare(password, result[0].password, (err,response) => {
      if (response) {
        const id=result[0].id;
        const token=jwt.sign({id},"jwtsecret",{
          expiresIn: '3d',
        });
        // req.session.user = result;
        res.json({auth:true, token:token,user:result[0]});
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
  var testUser=await user.findOne({email:email});
  if(testUser){
      return(res.status(400).send('email already exist!'))
  }

  bcrypt.hash(password, saltRounds, (err, hash) => {
    
    if (err) {
      console.log(err)
    }
    var data= {
      first_name:fisrtName,
      last_name:lastName,
      email:email,
      password:hash,
      userImg:'http://localhost:3001/images/avt.jpg',
      userAddress:'',
      userRole:'user',
      phoneNumber:''
    }
    user.create(data);
    res.status(200).send("register successfull");
  })

}