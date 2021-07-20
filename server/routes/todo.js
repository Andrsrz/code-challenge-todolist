const express = require('express')
const router = express.Router()
const path = require('path')

const ToDo = require(path.join(__dirname, '../controllers/todo.js'))

router.post('/create', ToDo.Create)
router.get('/all', ToDo.GetAll)
router.put('/done', ToDo.Done)
router.put('/update', ToDo.Update)
router.delete('/delete', ToDo.Delete)

module.exports = router
