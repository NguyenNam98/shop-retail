const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const bcrypt = require('bcrypt');
const userModel=require('./model/user.model');
const session=require('express-session');
const app = express();

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

app.post('/auth/register', function(req,res){
  const fisrtName=req.body.fisrtName;
  const lastName=req.body.lastName;
  const email=req.body.email;
  const passWord=req.body.passWord;

  bcrypt.hash(passWord, saltRounds, (err, hash) => {
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
app.post("/login",async(req,res)=>{
  const email= req.body.email;
  const password=req.body.password;
  var result= await userModel.find({email:email}); 
  console.log(result);
  if (result.length > 0) {
    bcrypt.compare(password, result[0].password, (response) => {
      if (response) {
        req.session.user = result;
        console.log(req.session.user);
        res.send(result);
      } else {
        res.send({ message: "Wrong username/password combination!" });
      }
    });
  } else {
    res.send({ message: "User doesn't exist" });
  }
})
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.listen(3000)