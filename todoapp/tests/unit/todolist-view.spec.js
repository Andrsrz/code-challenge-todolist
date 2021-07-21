import { shallowMount, createLocalVue } from '@vue/test-utils'
import router from '@/router'
import Buefy from 'buefy'
import ToDoList from '@/views/ToDoList.vue'
import fetchMock from 'jest-fetch-mock'

fetchMock.enableMocks()
fetch.mockResponse(JSON.stringify({ data: {} }))

const localVue = createLocalVue()
localVue.use(Buefy)

const wrapper = shallowMount(ToDoList, { router, localVue })

describe('ToDoList View', () => {
	it('renders a main div container', () => {
		expect(wrapper.get('#container').exists()).toBe(true)
	})

	const data = wrapper.vm.$data
	it('sets the default data', () => {
		expect(typeof wrapper.vm.$data).toBe('object')
		expect(data.labelButtonBack).toMatch('Back')
		expect(data.labelButton).toMatch('New ToDo')
	})

	const buttonContainer = wrapper.get('#container').get('#button-container')
	it('has a button container', () => {
		expect(buttonContainer.get('#goback').exists()).toBe(true)
		expect(buttonContainer.get('#goback').attributes('label')).toMatch('Back')
		expect(buttonContainer.get('#goback').attributes('title')).toMatch('Go Back')
		expect(buttonContainer.get('#goback').attributes('type')).toMatch('is-primary')
		expect(buttonContainer.get('h1').exists()).toBe(true)
		expect(buttonContainer.get('h1').attributes('class')).toMatch('is-size-4')
		expect(buttonContainer.get('#todo').exists()).toBe(true)
		expect(buttonContainer.get('#todo').attributes('label')).toMatch('New ToDo')
		expect(buttonContainer.get('#todo').attributes('type')).toMatch('is-primary')
	})
})
