var mongoose = require('mongoose');

var  userschma = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{ 
        type:String
    }
})

module.exports  = mongoose.model('user',userschma)