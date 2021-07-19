const ToDoList = require('../models/todoList.js')

exports.Create = (req, res) => {
	const myToDoList = new ToDoList({
		title: req.body.title,
		description: req.body.description,
		createdOn: new Date,
		updatedOn: new Date
	}).save(err => {
		if(err)
			return res.status(406).json(err)

		res.status(201).json({ message: 'ToDo List Created' })
	})
}

exports.GetAll = (req, res) => {
	ToDoList.find()
			.sort('createdOn')
			.exec((err, ToDoLists) => {
				if(err)
					return res.status(406).json(err)

				return res.status(200).json(ToDoLists)
			})
}

exports.GetById = (req, res) => {
	ToDoList.findById(req.query.id, (err, todoList) => {
		if(err)
			return res.status(404).json(err)

		return res.status(200).json(todoList)
	})
}

exports.Update = (req, res) => {
	ToDoList.findByIdAndUpdate(req.body.id, {
		_id: req.body.id,
		title: req.body.title,
		description: req.body.description,
		updatedOn: new Date
	}, err => {
		if(err)
			return res.status(406).json(err)

		return res.status(201).json({ message: 'ToDo List Updated' })
	})
}

exports.Delete = (req, res) => {
	ToDoList.findByIdAndDelete(req.body.id, err => {
		if(err)
			return re.status(406).json(err)

		return res.status(200).json({ message: 'ToDo List Deleted' })
	})
}
