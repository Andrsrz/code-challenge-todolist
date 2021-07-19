const mongoose = require('mongoose')

var Schema = mongoose.Schema

var todoList = new Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	todos: { type: [mongoose.ObjectId], default: [] },
	createdOn: { type: Date, required: true },
	updatedOn: { type: Date, required: true }
})

module.exports = mongoose.model('ToDoList', todoList)
