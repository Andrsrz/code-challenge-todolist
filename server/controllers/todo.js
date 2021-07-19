const ToDo = require('../models/todo.js')

exports.Create = (req, res) => {
	const myToDo = new ToDo({
		title: req.body.title,
		description: req.body.description,
		dueDate: req.body.dueDate,
		priority: req.body.priority,
		createdOn: new Date,
		updatedOn: new Date
	}).save(err => {
		if(err)
			return res.status(406).json(err)

		res.status(201).json({ message: 'ToDo Created' })
	})
}

exports.GetAll = (req, res) => {
	ToDo.find({ parent: req.query.parent })
			.populate('title')
			.sort('dueDate')
			.exec((err, ToDos) => {
				if(err)
					return res.status(406).json(err)

				return res.status(200).json(ToDos)
			})
}

exports.GetById = (req, res) => {
	ToDo.findById(req.query.id, (err, todo) => {
		if(err)
			return res.status(404).json(err)

		return res.status(200).json(todo)
	})
}

exports.Update = (req, res) => {
	ToDo.findByIdAndUpdate(req.body.id, {
		_id: req.body.id,
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
	ToDo.findByIdAndDelete(req.body.id, err => {
		if(err)
			return re.status(406).json(err)

		return res.status(200).json({ message: 'ToDo Deleted' })
	})
}
