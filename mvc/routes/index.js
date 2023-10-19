var express = require('express');
var router = express.Router();

var user = require('../controller/usercontroller');

router.post('/insert',user.insert);
router.get('/',user.get_data);
router.post('/update/:id',user.update_data)
router.get('/delete/:id',user.delete_data)

module.exports = router;