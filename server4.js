var express=require('express');
var app=express();

var books=require("./routes/books")
var students=require("./routes/student")


var bodyParser=require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))



app.use(express.static("public"))

app.get("/",function(req,res){
    res.send("Hello World")
})

//Get all books

app.use("/api/books",books)
app.use("/api/students",students)


app.listen(8000,function(){
    console.log("Server2 is started")
})