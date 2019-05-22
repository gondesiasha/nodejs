var express=require('express')
var router=express.Router();

var books=[
{
	id:1,
	title:"JS fundamentals",
	author:"john"

},
{
	id:2,
	title:"node fundamentals",
	author:"David"

},
{
	id:3,
	title:"angular fundamentals",
	author:"asha"

}
]
router.route("/")
.get((req,res)=>{
	res.send(books)
})
.post((req,res)=>{
	var newBook=req.body;
	books.push(newBook);
	res.send(books);
})


router.route("/:id")
.put((req,res)=>
{
	var id=req.params.id;
	var bookToBeupdated=books.filter((book)=>{
		return book.id==id
	})
	bookToBeupdated[0].title="oracale pro"
	res.send(bookToBeupdated)
})
.delete((req,res)=>{
	var id=req.params.id;
	var latestBooks=books.filter((book)=>{
		return book.id!=id
	})
	res.send(latestBooks)

})
module.exports=router;