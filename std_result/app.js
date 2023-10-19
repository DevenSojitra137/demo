var mysql = require('mysql')
var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:false}))

var conn = mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"",
    database:"user1",

})

conn.connect();

app.get('/',function(req,res){
    var select_data = "select * from  std_result";
    
    conn.query(select_data,function(error,result,field){
        if(error) throw error;
        res.render('index',{result});
    })
    
})

app.get('/delete/:id',function(req,res){
    var id = req.params.id;

    var delete_data = "delete from std_result where id = "+id;
    
    conn.query(delete_data,function(error,result,field){
        if(error) throw error;
        res.redirect('/');
    })
    
})

app.get('/update/:id',function(req,res){
    var id = req.params.id;

    var update_data = "select * from std_result where id= "+id;
    
    conn.query(update_data,function(error,result,field){
        if(error) throw error;
        res.render('update',{result});
    })
    
})

app.post('/update/:id',function(req,res){
    var id = req.params.id;

    var update_data = "update std_result set name ='"+req.body.name+"',Sub1='"+req.body.sub1+"',Sub2='"+req.body.sub2+"',Sub3='"+req.body.sub3+"',Sub4='"+req.body.sub4+"',Sub5='"+req.body.sub5+"'where id="+id;
    
    conn.query(update_data,function(error,result,field){
        if(error) throw error;
        res.redirect('/');
    })
    
})



app.post('/',function(req,res){

    var name = req.body.name;
    var sub1 = req.body.sub1;
    var sub2 = req.body.sub2;
    var sub3 = req.body.sub3;
    var sub4 = req.body.sub4;
    var sub5 = req.body.sub5;

    var total = parseInt(req.body.sub1) + parseInt(req.body.sub2) + parseInt(req.body.sub3) + parseInt(req.body.sub4) + parseInt(req.body.sub5);
    var avg  = total/5;

    if(sub1<sub2 && sub1<sub3 && sub1<sub4 && sub1<sub5)
    {
        var min = sub1;
    }
    if(sub2<sub1 && sub2<sub3 && sub2<sub4 && sub2<sub5)
    {
        var min = sub2;
    }
    if(sub3<sub1 && sub3<sub2 && sub3<sub4 && sub3<sub5)
    {
        var min = sub3;
    }
    if(sub4<sub1 && sub4<sub2 && sub4<sub3 && sub4<sub5)
    {
        var min = sub4;
    }
    if(sub5<sub1 && sub5<sub2 && sub5<sub4 && sub5<sub4)
    {
        var min = sub5;
    }


    if(sub1>sub2 && sub1>sub3 && sub1>sub4 && sub1>sub5)
    {
        var max = sub1;
    }
    if(sub2>sub1 && sub2>sub3 && sub2>sub4 && sub2>sub5)
    {
        var max = sub2;
    }
    if(sub3>sub1 && sub3>sub2 && sub3>sub4 && sub3>sub5)
    {
        var max = sub3;
    }
    if(sub4>sub1 && sub4>sub2 && sub4>sub3 && sub4>sub5)
    {
        var max = sub4;
    }
    if(sub5>sub1 && sub5>sub2 && sub5>sub4 && sub5>sub4)
    {
        var max = sub5;
    }

    var pass = "Pass";
    var fail = "Fail";

    if(avg<=33)
    {
        var result = fail;
    }
    if(avg>=33)
    {
        var result = pass;
    }

    var insert_data = "insert into std_result (name,sub1,sub2,sub3,sub4,sub5,total,avg,min,max,result) values ('"+req.body.name+"','"+req.body.sub1+"','"+req.body.sub2+"','"+req.body.sub3+"','"+req.body.sub4+"','"+req.body.sub5+"','"+total+"','"+avg+"','"+min+"','"+max+"','"+result+"')";

    conn.query(insert_data,function(error,result,field){
        if(error) throw error;
        res.redirect('/')
    })
})



app.listen(4040)


