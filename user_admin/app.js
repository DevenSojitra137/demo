var mysql = require('mysql')
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}))

var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"admin",
})

conn.connect();

app.get('/',function(req,res){
    res.render('index');
})

app.get('/admin',function(req,res){
    res.render('adminlogin')
})

app.get('/admin/dashboard',function(req,res){
    res.render('dashboard')
})

app.post('/admin',function(req,res){
   var login_query = "select * from user where username='"+req.body.adminname+"' and password='"+req.body.adminpassword+"'";

   conn.query(login_query,function(error,result,field){
    if(result.length == 1){
        res.redirect('/admin/dashboard')
    }
    else{
        res.redirect('/admin')
    }
   })
})


app.get('/admin/dashboard/add_user',function(req,res){
    res.render('add_user')
})

app.post('/admin/dashboard/add_user',function(req,res){
    var insert_data = "insert into user1(name,username,password) values ('"+req.body.adname+"','"+req.body.admail+"','"+req.body.adpassword+"')"

    conn.query(insert_data,function(error,result,field){
        if(error) throw error
        res.redirect('/admin/dashboard/add_user')

    })
})
app.get('/admin/dashboard/add_task',function(req,res){
    var select_query = "select * from user1"; 

    conn.query(select_query,function(error,result,field){
        if(error) throw error
        res.render('add_task',{result})
    })
})

app.post('/admin/dashboard/add_task',function(req,res){
    var insert_data = "insert into task_tbl(userid,Taskname,status) values ('"+req.body.user_id+"','"+req.body.task+"','"+req.body.status+"')"

    conn.query(insert_data,function(error,result,field){
        if(error) throw error
        res.redirect('/admin/dashboard/add_task')

    })
})



app.get('/admin/dashboard/manage_user',function(req,res){
    res.render('manage_user')
})
app.get('/admin/dashboard/view_task',function(req,res){

    var task = "select * from task_tbl"
    
    conn.query(task,function(error,result,field){
        if(error) throw error
        res.render('view_task',{result})
    })
})


app.listen(2004)

