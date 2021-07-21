import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import ToDo from '@/components/ToDo.vue'
import fetchMock from 'jest-fetch-mock'

fetchMock.enableMocks()
fetch.mockResponse(JSON.stringify({ data: {} }));

const localVue = createLocalVue()
localVue.use(Buefy)

const wrapper = shallowMount(ToDo, {
	propsData: {
		todo: {
			title: 'Title',
			description: 'Description',
			dueDate: '12/21/1967',
			done: false,
			priority: 'Neutral'
		}
	},
	localVue
})

describe('ToDo Component', () => {
	it('exists', () => {
		expect(wrapper.exists()).toBeTruthy()
	})

	it('sets the default data', () => {
		const data = wrapper.vm.$data
		expect(typeof wrapper.vm.$data).toBe('object')
		expect(data.done).toBe(false)
		expect(data.disabled).toMatch('')
		expect(data.labelDueDate).toBe('12/21/1967')
		expect(data.labelButtonEdit).toMatch('Edit')
		expect(data.labelButtonDelete).toMatch('Delete')
	})

	const todoContainer = wrapper.get('#todo')
	it('has a container', () => {
		expect(todoContainer.exists()).toBe(true)
		expect(todoContainer.attributes('class')).toMatch('Neutral')
	})

	it('has a checkbox to set as done', () => {
		const checkbox = todoContainer.get('b-checkbox-stub')
		expect(checkbox.exists()).toBe(true)
		expect(checkbox.attributes('type')).toMatch('is-success')
	})

	const titleContainer = todoContainer.get('#title-container')
	it('has a title container', () => {
		expect(titleContainer.exists()).toBe(true)
		expect(titleContainer.attributes('class')).toMatch('')
		expect(titleContainer.get('h1').exists()).toBe(true)
		expect(titleContainer.get('h1').text()).toMatch('Title')
		expect(titleContainer.get('p').exists()).toBe(true)
		expect(titleContainer.get('p').text()).toMatch('Due Date: 12/21/1967')
	})

	it('has a text for description', () => {
		expect(todoContainer.get('h3').exists()).toBe(true)
		expect(todoContainer.get('h3').attributes('class')).toMatch('')
		expect(todoContainer.get('h3').text()).toMatch('Description')
	})

	const buttonContainer = todoContainer.get('#button-container')
	it('has a buttons container', () => {
		expect(buttonContainer.exists()).toBe(true)
		expect(buttonContainer.get('#edit').exists()).toBe(true)
		expect(buttonContainer.get('#edit').attributes('type')).toMatch('is-warning')
		expect(buttonContainer.get('#edit').text()).toMatch('Edit')
		expect(buttonContainer.get('#delete').exists()).toBe(true)
		expect(buttonContainer.get('#delete').attributes('type')).toMatch('is-danger')
		expect(buttonContainer.get('#delete').text()).toMatch('Delete')
	})

	it('launchs deleteIt method', () => {
		wrapper.vm.deleteIt()
		expect(fetch).toBeCalledTimes(1)
	})
})
