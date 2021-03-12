const express = require('express');

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const session=require('express-session');
const jwt = require('jsonwebtoken');
const cors = require("cors");

const userModel=require('./model/user.model');
const productRoutes = require('./routes/product.route');
const orderRoutes=require('./routes/order.route')


const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
const saltRounds = 10;

mongoose.connect('mongodb://localhost/myshop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json()) // for parsing application/json;
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(
  session({
    key: "userId",
    secret: "michaelnam",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

const verifyJwt=(req,res,next)=>{
  const token= req.headers["x-access-token"];
  if(!token){
    res.send("need a token!")
  }else
    jwt.verify(token,"jwtsecret",(err,decoded)=>{
      if(err){
        res.json({auth:false,message:"you fail in authenticate !"})
      }
      else{
        req.userId=decoded.id;
        next();
      }
    })
}

app.post('/auth/register', function(req,res){
  const fisrtName=req.body.fisrtName;
  const lastName=req.body.lastName;
  const email=req.body.email;
  const password=req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err)
    }
    var data= userModel({
      first_name:fisrtName,
      last_name:lastName,
      email:email,
      password:hash
    })
    data.save(function (err) {
      if (err) return handleError(err);
      // saved!
      else
      res.send('done');
    });
  })

});
app.get("/login", (req, res) => {
  
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});
app.get("/useAuth",verifyJwt,(req,res)=>{
  res.send("trang thanh toan");

})
app.post("/login",async(req,res)=>{
  const email= req.body.email;
  const password=req.body.password;
  var result= await userModel.find({email:email}); 
  console.log(result);
  if (result.length > 0) {
    bcrypt.compare(password, result[0].password, (err,response) => {
      if (response) {
        
        const id=result[0].id;
        const token=jwt.sign({id},"jwtsecret",{
          expiresIn:10,
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
})

app.use('/products',productRoutes);
app.use('/order',orderRoutes);

app.listen(3001)