var express = require('express');
var router = express.Router();
const {createOrder, getOrder, updateOrder, deleteOrder} = require('../controllers/orderController')

/* GET users listing. */
router.route('/')
.post(createOrder)
.get(getOrder)

router.route('/:fid')
.put(updateOrder)
.delete(deleteOrder)
module.exports = router;