var usermodel = require('../model/usermodel')

exports.insert = async(req,res) => {
    var data = await usermodel.create(req.body)

    res.status(200).json({
        status : 'succsecc',
        data
    })
}

exports.get_data = async(req,res) => {
    var page_no  = req.query.page_no;

    res.status(200).json({
        status : 'succsecc',
        data
    })
}

