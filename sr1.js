'use strict';

const hapi=require('@hapi/hapi');


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

const init=async()=> {
    const server=hapi.server(
    {
        port:8000,
        host:'localhost'

    });
    server.route({
        method: 'GET',
        path:'/',
        handler:(request,h)=>{
           return books;
        }
    });
    server.route({
        method: 'post',
        path:'/',
        handler:(request,h)=>{
            books.push(request.payload);
            return books;


        }
    })
    server.route({
        method: 'put',
        path:'/{author}',
        handler:(request,h)=>{
            var id=request.params.author;
            var newtitle=request.payload.title;
            var updated=books.filter((object)=>{
                return id==object.author;
            })
            updated[0].title=newtitle;
            return updated;
        }
    })
    server.route({
        method:'delete',
        path:'/{id}',
        handler:(request,h)=>{
            var id=request.params.id;
            var deletedbook=books.filter((obj)=>{
                return obj.id!=id;
            })
            return deletedbook;
        }
    })


    await server.start();
    console.log('server running on %s',server.info.uri);

};
process.on('unhandledRejection',(err)=>{
    console.log(err);
    process.exit(1);
});
init();




