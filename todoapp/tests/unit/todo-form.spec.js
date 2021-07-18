import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import ToDoForm from '@/components/ToDoForm.vue'

const localVue = createLocalVue()
localVue.use(Buefy)

const wrapper = shallowMount(ToDoForm, { localVue })

describe('ToDo Form Component', () => {
	it('should set the correct default data', () => {
		const data = wrapper.vm.$data
		expect(typeof wrapper.vm.$data).toBe('object')
		expect(data.labelTitle).toMatch('Title')
		expect(data.labelDescription).toMatch('Description')
		expect(data.labelDueDate).toMatch('Due Date')
		expect(data.labelPriority).toMatch('Priority')
		expect(data.labelAccept).toMatch('Accept')
		expect(data.labelsPosition).toMatch('on-border')
		expect(typeof data.date).toBe('object')
		expect(data.selectPlaceholder).toMatch('Select a Priority')
		expect(data.priorities).toContain('High')
		expect(data.priorities).toContain('Neutral')
		expect(data.priorities).toContain('Low')
	})

	const form = wrapper.get('form')
	it('has a form base section', () => {
		expect(form).toBeTruthy()
		expect(form.attributes('id')).toMatch('todo-form')
	})

	const inputSection = form.get('#input-section')
	it('has section for inputs', () => {
		expect(inputSection).toBeTruthy()
	})

	it('has a title input', () => {
		expect(inputSection.get("[label='Title']"))
		expect(inputSection.get("[label='Title']").attributes('labelposition')).toMatch('on-border')
		expect(inputSection.get("[label='Title'] > b-input-stub"))
	})

	it('has a description input', () => {
		expect(inputSection.get("[label='Description']"))
		expect(inputSection.get("[label='Description'] > b-input-stub"))
	})

	it('has a due date datepicker', () => {
		expect(inputSection.get("[label='Due Date']"))
		expect(inputSection.get("[label='Due Date'] > b-datepicker-stub"))
	})

	it('has a priority selector', () => {
		expect(inputSection.get("[label='Priority']"))
		expect(inputSection.get("[label='Priority'] > b-select-stub"))
	})

	const buttonSection = form.get('#button-section')
	it('has a button section', () => {
		expect(buttonSection).toBeTruthy()
	})

	it('has a button to accept', () => {
		const acceptButton = buttonSection.get('b-button-stub')
		expect(acceptButton).toBeTruthy()
		expect(acceptButton.attributes('type')).toMatch('is-success')
		expect(acceptButton.text()).toMatch('Accept')
	})
})
