const mongoose = require('mongoose')

var Schema = mongoose.Schema

var todo = new Schema({
	title: { type: String, require: true },
	description: { type: String, required: true },
	dueDate: { type: Date, required: true },
	priority: { type: String, required: true },
	parent: { type: mongoose.ObjectId, required: true },
	done: { type: Boolean, default: false },
	createdOn: { type: Date, required: true },
	updatedOn: { type: Date, required: true }
})

module.exports = mongoose.model('ToDo', todo)
