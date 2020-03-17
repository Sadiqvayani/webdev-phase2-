const mysql =require('mysql');
//first have to start express server
const express=require('express');
var app=express();
const bodyparser= require('body-parser');
let port = process.env.PORT || 8000;
//config express server to acces these datas
app.use(bodyparser.json());
var mysqlConnection =mysql.createConnection({
     host:'localhost',
     user: 'root',
     password:'admin123',
     database:'sampledb',
     multipleStatements: true
});
mysqlConnection.connect((err)=> {
    if(!err)
    console.log('DB Connection Established Successfully');
    else
    console.log('DB Connection Failed! IN \n error:'+ JSON.stringify(err,undefined,2)); 
    });
     //we need to start the server(port no, console.log called after starting the server)
     app.listen(port, ()=>console.log('Express server is running at port no : '+port));

     //in order to fet employers(Invoked when user request this right)
     app.get("/ret",(req,res)=>{
            //executing slect * statement, 2nd parameter call back function after query called
            mysqlConnection.query('SELECT * FROM sampletable',(err,rows, fields)=> {
                if(!err)
                res.send(rows);//rowsparameter
                else
                console.log(err);
            })
     } );
//in order to get an employee for eg /ret/1
     //indie this proeprt "req.params.id]" will have id that we passed through
     app.get("/ret/:id",(req,res)=>{
        //executing slect * statement, 2nd parameter call back function after query called
        mysqlConnection.query('SELECT * FROM sampletable WHERE empid = ?',[req.params.id],(err,rows, fields)=> {
            if(!err)
            res.send(rows);//rowsparameter
            else
            console.log(err);
        })
 }
 );
 //For delete from DB
     //indie this proeprt "req.params.id]" will have id that we passed through
     app.delete("/ret/:id",(req,res)=>{
        //executing slect * statement, 2nd parameter call back function after query called
        mysqlConnection.query('DELETE from sampletable WHERE empid = ?',[req.params.id],(err,rows, fields)=> {
            if(!err)
            res.send("Delete succesfully");//rowsparameter
            else
            console.log(err);
        })
 }
 );

 //Insert an employee in DB
     //indie this proeprt "req.params.id]" will have id that we passed through
     app.post("/ret",(req,res)=>{
         let emp=req.body;
        var sql= "SET @empid = ?; SET @name = ?; SET @no =?; SET @code = ?; \
        CALL empaddoredit(@empid, @name, @no, @code);";
        mysqlConnection.query(sql,[emp.empid,emp.name,emp.no,emp.code],(err,rows, fields)=> {
            if(!err)
            //res.send(rows);// sending objects whicha re not of our use
            rows.forEach(element => {
                if(element.constructor == Array)
                res.send('Inserted sampletable id : '+element[0].empid);
            });
            else
            console.log(err);
        })
 }
 );

 //UPDATE an employee in DB
     //indie this proeprt "req.params.id]" will have id that we passed through
     app.put("/ret",(req,res)=>{
        let emp=req.body; //retreice the json object from request  into this variable here
       var sql= "SET @empid = ?; SET @name = ?; SET @no =?; SET @code = ?; \
       CALL empaddoredit(@empid, @name, @no, @code);";
       mysqlConnection.query(sql,[emp.empid,emp.name,emp.no,emp.code],(err,rows, fields)=> {
           if(!err)
           res.send('updated succesfully');
           
           else
           console.log(err);
       })
}
);