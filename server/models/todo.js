const mongoose = require('mongoose')
const ToDoSchema = require('./schemas/todo.js')

module.exports = mongoose.model('ToDo', ToDoSchema)
