const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const ToDoList = require('./routes/todoList')
const ToDo = require('./routes/todo')

function createServer(){
	const app = express()
	app.use(morgan('combined'))
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extend: true }))
	app.use(cors())
	app.use('/api/todolist', ToDoList)
	app.use('/api/todo', ToDo)
	return app
}

module.exports = createServer
