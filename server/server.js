const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const ToDoList = require('./routes/todoList')
const ToDo = require('./routes/todo')
const PORT = 3000

mongoose.connect('mongodb://127.0.0.1:27017/todoapp', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to DB'))

const app = express()
app.use(cors())
app.use(morgan('combined'))
app.use('/api/todolist', ToDoList)
app.use('/api/todo', ToDo)

app.listen(PORT, error => {
	if(error)
		return console.error(error)

	return console.log('Server listening on port ' + PORT)
})

module.exports = app
