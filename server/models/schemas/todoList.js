const mongoose = require('mongoose')
const ToDo = require('./todo.js')

var Schema = mongoose.Schema

var todoList = new Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	todos: { type: [ToDo.ObjectId] },
	createdOn: { type: Date, default: new Date },
	updatedOn: { type: Date, default: new Date }
})

module.exprots = todoList
