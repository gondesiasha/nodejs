'use strict';

const hapi=require('@hapi/hapi');
const MySQL=require('mysql');


/*var books=[
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
]*/

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
            const connection=MySQL.createConnection({
                host:'localhost',
                user:'root',
                password:'',
                database:'asha2'
            });
            connection.connect();
            connection.query('select *from books',function(error,results,fields){
                if(error) throw error;
                return books;
            });
            connection.end();




           
        }
    });
   
   


    await server.start();
    console.log('server running on %s',server.info.uri);

};
process.on('unhandledRejection',(err)=>{
    console.log(err);
    process.exit(1);
});
init();




