var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}))

var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"user1",
})

conn.connect();

app.get('/',function(req,res){

    var insert_qurey = 'select * from tbl1';

    conn.query(insert_qurey,function(error,result,field){
        if(error) throw error;
        res.render('index',{result});
    })
})

app.post('/',function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    var insert_data = "insert into tbl1 (name,email,password) values ('"+name+"','"+email+"','"+password+"')";

    conn.query(insert_data,function(error,result,field){
        if(error) throw error;
        res.redirect('/');  //get
    })
})

app.get('/',function)

app.listen(5500);