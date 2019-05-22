var express=require('express')
var router=express.Router();

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
router.route("/")
.get((req,res)=>{
	res.send(students)
})
.post((req,res)=>{
	var newStudent=req.body;
	students.push(newStudent);
	res.send(students);
})

router.route("/:id")
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
module.exports=router;