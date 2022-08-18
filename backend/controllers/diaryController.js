const asyncHandler = require('express-async-handler')

const Diary = require('../model/diaryModel')
const User = require('../model/usersModel')

// @desc    Get diarys
// @route   GET /api/diarys
// @access  Private
const getDiaries = asyncHandler(async (req, res) => {
  const diarys = await Diary.find({ user: req.user.id })
  res.status(200).json(diarys)
})

// @desc    Set diary
// @route   POST /api/diarys
// @access  Private
const setDiary = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    
    res.status(400)
    throw new Error('Please add a text field')
  }
  
  const diary = await Diary.create({
    text: req.body.text,
    // user: req.user.id
  })
  
  res.status(200).json(diary)
})

// @desc    Update diary
// @route   PUT /api/diarys/:id
// @access  Private
const updateDiary = asyncHandler(async (req, res) => {
  const diary = await Diary.findById(req.params.id)
  
  if (!diary) {
    res.status(400)
    throw new Error('Diary not found')
  }
  
  // Check for user
  // if (!req.user) {
  //   res.status(401)
  //   throw new Error('User not found')
  // }
  
  // Make sure the logged in user matches the diary user
  // if (diary.user.toString() !== req.user.id) {
  //   res.status(401)
  //   throw new Error('User not authorized')
  // }
  
  const updatedDiary = await Diary.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  
  res.status(200).json(updatedDiary)
})

// @desc    Delete diary
// @route   DELETE /api/diarys/:id
// @access  Private
const deleteDiary = asyncHandler(async (req, res) => {
  
  const diary = await Diary.findById(req.params.id)
  
  // Check for user
  // if (!req.user) {
  //   res.status(401)
  //   throw new Error('User not found')
  // }
  //
  // // Make sure the logged in user matches the diary user
  // if (diary.user.toString() !== req.user.id) {
  //   res.status(401)
  //   throw new Error('User not authorized')
  // }
  
  await diary.remove()
  
  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getDiaries,
  setDiary,
  updateDiary,
  deleteDiary,
}