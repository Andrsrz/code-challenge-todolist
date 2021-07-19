const mongoose = require('mongoose')
const ToDoListSchema = require('./schemas/todoList.js')

module.exports = mongoose.model('ToDoList', ToDoListSchema)
