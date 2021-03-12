const News =require('../model/news.model');

module.exports.index=async function(req,res){
    var news = await News.find();
    res.json(news);
}