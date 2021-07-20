const ToDo = require('../models/todo.js')
const ToDoList = require('../models/todoList.js')

exports.Create = async (req, res) => {
	let myToDo = new ToDo({
		title: req.body.title,
		description: req.body.description,
		dueDate: req.body.dueDate,
		priority: req.body.priority,
		parent: req.body.parent,
		createdOn: new Date,
		updatedOn: new Date
	})

	await myToDo.save(err => {
		if(err)
			return res.status(406).json(err)
	})

	ToDoList.findById(req.body.parent, (err, todoList) => {
		if(err)
			return res.status(404).json(err)

		todoList.todos.push(myToDo._id)

		ToDoList.findByIdAndUpdate(req.body.parent, {
			todos: todoList.todos,
			updatedOn: new Date()
		}, err => {
			if(err)
				return res.status(404).json(err)
		})

		return res.status(201).json({ message: 'ToDo Created' })
	})

}

exports.GetAll = (req, res) => {
	ToDo.find({ parent: req.query.parent })
			.sort('dueDate')
			.exec((err, ToDos) => {
				if(err)
					return res.status(406).json(err)

				return res.status(200).json(ToDos)
			})
}

exports.Done = (req, res) => {
	ToDo.findByIdAndUpdate(req.query.id, {
		done: req.body.done,
		updatedOn: new Date
	}, err => {
		if(err)
			return res.status(406).json(err)

		return res.status(201).json({ message: 'ToDo Done Updated' })
	})
}

exports.Update = (req, res) => {
	ToDo.findByIdAndUpdate(req.query.id, {
		title: req.body.title,
		description: req.body.description,
		dueDate: req.body.dueDate,
		priority: req.body.priority,
		updatedOn: new Date
	}, err => {
		if(err)
			return res.status(406).json(err)

		return res.status(201).json({ message: 'ToDo Updated' })
	})
}

exports.Delete = (req, res) => {
	ToDo.findByIdAndDelete(req.query.id, err => {
		if(err)
			return re.status(406).json(err)

		return res.status(200).json({ message: 'ToDo Deleted' })
	})
}
