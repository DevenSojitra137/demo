var mongoose = require('mongoose')

var userschema = new mongoose.Schema({
    name:{
        type:String
    }
})

module.exports = mongoose.model('user'.userschema)