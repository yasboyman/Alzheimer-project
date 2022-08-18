const express = require('express')
const router = express.Router()
const {
  getDiaries,
  setDiary,
  updateDiary,
  deleteDiary,
} = require('../controllers/diaryController')

const { protect } = require('../authMiddleware')

router.route('/').get(protect, getDiaries).post(setDiary)
router.route('/:id').delete( deleteDiary).put( updateDiary)

module.exports = router