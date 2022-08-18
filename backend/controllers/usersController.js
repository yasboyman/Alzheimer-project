const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt =  require('jsonwebtoken')
const User = require('../model/usersModel')

// @desc GET /user
const getUser = asyncHandler(async (req, res) => {
const {_id, name, email} = await User.findById(req.user.id)
  res.status(200).json({
    name: name,
   id: _id,
    email: email})
})

// @desc REGISTER user
const createUser = asyncHandler(async (req, res)  => {
  const {name,email, password} = req.body
  if(!name || !email || !password){
    res.status(400)
    throw new Error('Please add all fields')
  }
  
  // Check if user exists//
  const userExist = await User.findOne({email})
  if(userExist){
    res.status(400)
    throw new Error('User already exists')
  }
  // Hash pass//
  const salt = await bcrypt.genSalt(10)
  const hashedPass =  await bcrypt.hash(password, salt)
  
  // Create user//
  const user = await User.create({
    name,
    email,
    password: hashedPass
  })
  
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
  }else {
      res.status(400)
      throw new Error('invalid user data')
    }
})

// @desc LOGIN user
const loginUser = asyncHandler(async (req, res)  => {
  const {email, password} = req.body
  
  const user = await User.findOne({email})
  
  if(user && (await bcrypt.compare(password, user.password))){
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
  
    })
  } else {
    res.status(400)
    throw new Error('Invalid creditials data')
  }
})

// @desc UPDATE /user
const updateUser = asyncHandler(async (req, res)  => {
  res.status(200).json({message: `update user ${req.params.id}`})
})

// @desc DELETE  /user
const deleteUser = asyncHandler(async (req, res)  => {
  res.status(200).json({message: `Delete user ${req.params.id}`})
})

// GENERATE TOKEN //
const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports ={
  getUser,
  loginUser,
  createUser,
  updateUser,
  deleteUser
}