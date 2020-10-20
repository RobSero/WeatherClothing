const router = require('express').Router()
const { getAllClothesData } = require('../controllers/clothingApi')


//  FETCHING CLOTHING DATA
router.route('/clothes')
  .get(getAllClothesData)

module.exports = router


