var usermodel = require('../model/usermodel')

exports.insert = async (req,res) => {

    var data = await usermodel.create(req.body);

    res.status(200).json({
        status:"succsess",
        data
    })
}

exports.get_data = async (req,res) => {

    var data = await usermodel.find();

    res.status(200).json({
        status:"succsess",
        data
    })
}

exports.update_data = async (req,res) => {

    var data = await usermodel.findByIdAndUpdate(req.body,id);

    var id = req.params.id;

    res.status(200).json({
        status:"succsess",
        data
    })
}

exports.delete_data = async (req,res) => {

    var id = req.params.id;
    var data = await usermodel.findByIdAndDelete(id);


    res.status(200).json({
        status:"succsess",
        data
    })
}