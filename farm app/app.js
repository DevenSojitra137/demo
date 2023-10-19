var mysql = require('mysql')
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:false}))

var conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "farm",
})

conn.connect();

app.get('/admin',function(req,res){
    res.render('admin')
})

app.post('/admin',function(req,res){
    var login_query = "select * from admin_tbl where email='"+req.body.aemail+"' and password='"+req.body.apassword+"'";
 
    conn.query(login_query,function(error,result,field){
     if(result.length == 1){
         res.redirect('/admin/dashboard')
     }
     else{
         res.redirect('/admin')
     }
    })
 })

 app.get('/admin/dashboard',function(req,res){
    res.render('dashboard')
 })

 app.get('/admin/dashboard/add_product',function(req,res){
    res.render('add_product')
})

app.post('/admin/dashboard/add_product',function(req,res){
    insert_query = "insert into addpro (name,details,price,qty) values ('"+req.body.adname+"','"+req.body.addetails+"','"+req.body.adprice+"','"+req.body.adqty+"')";
    
    conn.query(insert_query,function(error,result,field){
        if (error) throw error

        res.redirect('/admin/dashboard/add_product')
    })
})

app.get('/admin/dashboard/view_product',function(req,res){

    select_query = "select * from addpro";

    conn.query(select_query,function(error,result,field){
        if (error) throw error

        res.render('view_product',{result})
    })
})



app.get('/admin/dashboard/manage_order',function(req,res){
    res.render('add_product')
})

app.get('/admin/dashboard/view_income',function(req,res){
    res.render('add_product')
})

app.listen(5050)