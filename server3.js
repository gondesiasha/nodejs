var express=require('express');
var app=express();

var bodyParser=require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

var students=[
    {
        name:"Asha",
        rollno:1,
        marks:89,
        subject:"Electronics"
    },
    {
         name:"Reema",
        rollno:2,
         marks:89,
        subject:"Electrical"
        
    },
    {
         name:"Priya",
        rollno:3,
         marks:89,
        subject:"physics"
    }
]

app.use(express.static("public"))

app.get("/",function(req,res){
    res.send("Hello World")
})

//Get all books
app.route("/api/students")
.get((req,res)=>{
    res.send(students)
})
.post((req,res)=>{
    var newStudent=req.body;
    students.push(newStudent);
    res.send(students);
})

app.route("/api/students/:id")
.put((req,res)=>{
    var id=req.params.id;
    var studentToBeupdated=students.filter((student)=>{
        return student.rollno==id
    })
    studentToBeupdated[0].title="alekhya"
    res.send(studentToBeupdated)
})
.delete((req,res)=>{
    var id=req.params.id;

    var latestStudent=students.filter((student)=>{
        return student.rollno!=id
    })

    res.send(latestStudent)
})

app.listen(8000,function(){
    console.log("Server2 is started")
})