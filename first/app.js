var mysql = require('mysql');
var express = require('express');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user1',
});

conn.connect();

var insert_query = "insert into tbl1(name,email,password) values ('hii','hii@gmail.com','hii11')";
var select_query = "select * from tbl1;"
var dlt_query = "DELETE FROM tbl1 WHERE name='deven'";
var upd = "update tbl1 set name ='pritesh' where id = 3";


conn.query(insert_query, function (error, result, fields) {
    if (error) throw error;
    // console.log("Insert");
    console.log('okk');
})
