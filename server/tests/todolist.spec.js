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

describe('ToDoList', () => {
	it('creates ToDo List | POST /api/todolist/create', async () => {
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

	let ToDoId = ''
	it('Get ToDo Lists | GET /api/todolist/all', async () => {
		await request(app)
			.get('/api/todolist/all')
			.expect(200)
			.then(response => {
				ToDoId = response.body[0]._id
				expect(typeof response.body[0]).toBe('object')
				expect(typeof response.body[0]._id).toBe('string')
				expect(response.body[0].title).toMatch('Home Chores')
				expect(response.body[0].description).toMatch('My Home Chores')
			})
	})

	it('Get One ToDo List | GET /api/todolist/one', async () => {
		await request(app)
			.get(`/api/todolist/one?id=${ToDoId}`)
			.expect(200)
			.then(response => {
				expect(typeof response.body).toBe('object')
				expect(response.body._id).toMatch(ToDoId)
				expect(response.body.title).toMatch('Home Chores')
				expect(response.body.description).toMatch('My Home Chores')
			})
	})

	it('Update ToDo List | PUT /api/todolist/update', async () => {
		await request(app)
			.put(`/api/todolist/update?id=${ToDoId}`)
			.send({
				title: 'Home Chores Updated',
				description: 'My Home Chores Updated'
			})
			.expect(201)
			.then(response => {
				expect(response.body.message).toMatch('ToDo List Updated')
			})
	})

	it('Delete ToDo List | DELETE /api/todolist/delete', async () => {
		await request(app)
			.delete(`/api/todolist/delete?id=${ToDoId}`)
			.expect(200)
			.then(response => {
				expect(response.body.message).toMatch('ToDo List Deleted')
			})
	})
})
