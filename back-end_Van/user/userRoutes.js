const express = require('express')
const router = express.Router()
const userController = require('./userController')
// Get all
router.get('/',userController.getAll)
router.post('/',userController.addOne)
router.put('/:_id',userController.updateOne)
router.get('/:_id',userController.getOne)
router.delete('/:_id',userController.deleteOne)
router.delete('/',userController.deleteAll)

module.exports = router