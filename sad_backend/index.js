const mysql=require("mysql");
const cors=require("cors");
var mysqlconnec=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'admin123',
    database:'a',
    multipleStatements:true
})
const express=require("express");
const app=express();
const bodypar=require("body-parser");
var session = require('express-session');
app.use(cors())
app.use(bodypar.json());
mysqlconnec.connect((err)=>{
if(!err){
    console.log("connected successfully");
} else{
    console.log("errorr"+JSON.stringify(err,undefined,2));
}

})
app.listen(4000,()=>{console.log("express server is running !!!11")});

app.post("/signup",(req,res)=>{
    let emp=req.body;
    var sql="INSERT INTO users VALUES(?,?,?,?,?);"
    mysqlconnec.query(sql,[emp.fullname,emp.contactno,emp.email,emp.password,emp.Gender],(err,row,fields)=>{
        if(!err){
            console.log(row)
        } else{
            console.log(err);
        }})})
        app.post("/login",(req,res)=>{
            let emp=req.body;
            var sql="SELECT * FROM users where email=? AND password=?"
            mysqlconnec.query(sql,[emp.email,emp.password],(err,row,fields)=>{
                if(row.length>0){
                    res.send("Success");
                } else{
                    res.send("Fail");
                }})})
            
    