const express = require('express');
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const session=require('express-session');
const jwt = require('jsonwebtoken');
const cors = require("cors");

const socketIo = require("socket.io");
const server = require('http').createServer(app);

// const userModel=require('./model/user.model');
const productRoutes = require('./routes/product.route');
const orderRoutes=require('./routes/order.route');
const newsRoutes=require('./routes/news.route');
const contactRoutes=require('./routes/contact.route');
const emailSubcribeRoutes=require('./routes/emailSubcribe.route');
const userRoutes =require('./routes/user.route');
const chatRoutes=require('./routes/chat.route');
const Chat = require('./model/Chat.model');

const io = socketIo(server);





app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);


mongoose.connect('mongodb://localhost/myshop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
io.on('connection', async function(socket){
  socket.on('join',async function(data){
    if(data.isAdmin===true){
      socket.join(data.sessionId)
      var allChat=await Chat.find();
      io.in('admin').emit('send-all-chat',allChat)
    }else{
      if(data.sessionId){
        socket.join(data.sessionId)
        Chat.find({sessionId:data.sessionId}).then(function(chat){
          socket.emit('sendFirstChat',chat)
        })
      }
    }
  })
  socket.on('firstMessage', async function(data){
    await Chat.create(data)
    const allChat=await Chat.find()
    io.in('admin').emit('client-msg',{
      userChatInfo:[data],
      allChat:allChat
    })
  })
  socket.on('messageSend', async function(data){
    Chat.findOne({sessionId:data.sessionId})
    .updateOne({$push:{chatContent:{text:data.text,time:data.time}}}).exec()
    const userChatInfo = await Chat.find({ sessionId : data.sessionId })
    const allchat = await Chat.find();
    io.in('admin').emit('client-msg',{
      userChatInfo:userChatInfo,
      allChat:allchat
    })
  })
  socket.on('messageSend-admin',function(data) {
    Chat.findOne({ sessionId: data.roomId })
      .updateOne({$push: { chatContent: {fromAdmin: true, text: data.text, time: data.time} }})
      .exec()
    socket.to(data.roomId).emit('admin-msg', data); 
  })
})

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json()) // for parsing application/json;
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/products',productRoutes);
app.use('/order',orderRoutes);
app.use('/news',newsRoutes);
app.use('/contact',contactRoutes);
app.use('/email',emailSubcribeRoutes);
app.use ('/user',userRoutes);
app.use('/chat',chatRoutes);

app.listen(3001)