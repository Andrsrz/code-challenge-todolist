const express = require('express')
const router = express.Router()
const path = require('path')

const ToDo = require(path.join(__dirname, '../controllers/todo.js'))

router.post('/create', ToDo.Create)
router.get('/all', ToDo.GetAll)
router.get('/one', ToDo.GetById)
router.post('/update', ToDo.Update)
router.post('/delete', ToDo.Delete)

module.exports = router
