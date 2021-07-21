const request = require('supertest')
const server = require('../mockServer')
const mongoose = require('mongoose')

beforeEach((done) => {
	mongoose.connect(
		'mongodb://127.0.0.1:27017/todoapp',
		{ useNewUrlParser: true },
		() => done()
	)
})

afterEach((done) => {
	mongoose.connection.close(() => done())
})

const app = server()

describe('ToDoList and ToDos', () => {
	it('Creates ToDo List | POST /api/todolist/create', async () => {
		await request(app)
			.post('/api/todolist/create')
			.send({
				title: 'Home Chores',
				description: 'My Home Chores'
			})
			.expect(201)
			.then(response => {
				expect(response.body).toBeTruthy()
				expect(response.body.message).toMatch('ToDo List Created')
			})
	})

	let ToDoListId = ''
	it('Get ToDo Lists | GET /api/todolist/all', async () => {
		await request(app)
			.get('/api/todolist/all')
			.expect(200)
			.then(response => {
				ToDoListId = response.body[0]._id
				expect(typeof response.body[0]).toBe('object')
				expect(typeof response.body[0]._id).toBe('string')
				expect(response.body[0].title).toMatch('Home Chores')
				expect(response.body[0].description).toMatch('My Home Chores')
			})
	})

	it('Get One ToDo List | GET /api/todolist/one', async () => {
		await request(app)
			.get(`/api/todolist/one?id=${ToDoListId}`)
			.expect(200)
			.then(response => {
				expect(typeof response.body).toBe('object')
				expect(response.body._id).toMatch(ToDoListId)
				expect(response.body.title).toMatch('Home Chores')
				expect(response.body.description).toMatch('My Home Chores')
			})
	})

	it('Creates ToDo | POST /api/todo/create', async () => {
		await request(app)
			.post('/api/todo/create')
			.send({
				title: 'Do Laundary',
				description: 'I have black, white and color clothes',
				dueDate: '12/21/1967',
				priority: 'High',
				parent: ToDoListId
			})
			.expect(201)
			.then(response => {
				expect(response.body).toBeTruthy()
				expect(response.body.message).toMatch('ToDo Created')
			})
	})

	let ToDoId = ''
	it('Get ToDos | GET /api/todo/all', async () => {
		await request(app)
			.get(`/api/todo/all?parent=${ToDoListId}`)
			.expect(200)
			.then(response => {
				ToDoId = response.body[0]._id
				expect(typeof response.body[0]).toBe('object')
				expect(typeof response.body[0]._id).toBe('string')
				expect(response.body[0].title).toMatch('Do Laundary')
				expect(response.body[0].description).toMatch('I have black, white and color clothes')
				expect(response.body[0].priority).toMatch('High')
				expect(response.body[0].parent).toMatch(ToDoListId)
			})
	})

	it('Update Done ToDo | PUT /api/todo/done', async () => {
		await request(app)
			.put(`/api/todo/done?id=${ToDoId}`)
			.send({
				done: true
			})
			.expect(201)
			.then(response => {
				expect(response.body.message).toMatch('ToDo Done Updated')
			})
	})

	it('Update ToDo | PUT /api/todo/update', async () => {
		await request(app)
			.put(`/api/todo/update?id=${ToDoId}`)
			.send({
				title: 'Do Laundary',
				description: 'I have black and color clothes',
				dueDate: '12/21/1967',
				priority: 'Neutral',
			})
			.expect(201)
			.then(response => {
				expect(response.body.message).toMatch('ToDo Updated')
			})
	})

	it('Update ToDo List | PUT /api/todolist/update', async () => {
		await request(app)
			.put(`/api/todolist/update?id=${ToDoListId}`)
			.send({
				title: 'Home Chores Updated',
				description: 'My Home Chores Updated'
			})
			.expect(201)
			.then(response => {
				expect(response.body.message).toMatch('ToDo List Updated')
			})
	})

	it('Delete ToDo | DELETE /api/todo/delete', async () => {
		await request(app)
			.delete(`/api/todo/delete?id=${ToDoId}`)
			.expect(200)
			.then(response => {
				expect(response.body.message).toMatch('ToDo Deleted')
			})
	})

	it('Delete ToDo List | DELETE /api/todolist/delete', async () => {
		await request(app)
			.delete(`/api/todolist/delete?id=${ToDoListId}`)
			.expect(200)
			.then(response => {
				expect(response.body.message).toMatch('ToDo List Deleted')
			})
	})
})
