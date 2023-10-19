var mysql = require('mysql');
var express = require('express');
var app = express()
var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'user1',
})

conn.connect();

app.get('/',function(req,res){
    var insert_query = "insert into tbl1 (name,email,password)values('prince','prince@gmail.com','prince@123')";

    conn.query(insert_query,function(error,result,field){
        if(error) throw error;

        res.status(200).json({
            status : "succsess"
        })
    })
})

app.get('/select',function(req,res){
    var select_query = "select id from tbl1 where name = 'demo'";

    conn.query(select_query,function(error,result,field){
        if(error) throw error;

        res.status(200).json({
            status : "succsess",
            result
        })
    })
})

app.get('/delete',function(req,res){
    var delete_query = "delete from tbl1 where id = 10";

    conn.query(delete_query,function(error,result,field){
        if(error) throw error;

        res.status(200).json({
            status : "succsess",
        })
    })
})

app.listen(2000);

