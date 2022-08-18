
const express = require("express");
const router = express.Router()

const {getUser, createUser, updateUser, deleteUser, loginUser} = require('../controllers/usersController')
const {protect} = require('../authMiddleware')

router.route('/getUser').get(protect,getUser)

router.route('/register').post(createUser)

router.route('/login').post(loginUser)


router.route('/:id')
.put(updateUser)
.delete(deleteUser)


module.exports = router
