var express=require('express');
var app=express();
var path=require('path');

var books=require("./routes/books2")
var students=require("./routes/student")


var bodyParser=require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
	res.sendFile(path.join(__dirname,"public/index.html"))
})
app.get("/training",function(req,res){
	res.sendFile(path.join(__dirname,"public/training.html"))
})

app.use(express.static("public"))

app.get("/",function(req,res){
    res.send("Hello World")
})

//Get all books

app.use("/api/books2",books)
app.use("/api/students",students)


app.listen(8000,function(){
    console.log("Server2 is started")
})