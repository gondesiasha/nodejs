var express=require('express');
var app=express();
var path=require('path');
app.use(express.static("public"))
app.get("/",function(req,res){
	res.sendFile(path.join(__dirname,"public/index.html"))
})
app.get("/training",function(req,res){
	res.sendFile(path.join(__dirname,"public/training.html"))
})
app.listen(8000,function(){
	console.log("server is started")
})