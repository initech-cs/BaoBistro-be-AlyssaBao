var express = require('express');
var router = express.Router();
const {createFood, getFoods, updateFood, deleteFood} = require('../controllers/foodController')

/* GET users listing. */
router.route('/')
.post(createFood)
.get(getFoods)

router.route('/:fid')
.put(updateFood)
.delete(deleteFood)
module.exports = router;