import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import ToDoListForm from '@/components/ToDoListForm.vue'

const localVue = createLocalVue()
localVue.use(Buefy)

const wrapper = shallowMount(ToDoListForm, { localVue })

describe('ToDo List Form', () => {
	it('should set the correct default data', () => {
		const data = wrapper.vm.$data
		expect(typeof wrapper.vm.$data).toBe('object')
		expect(data.modalTitle).toMatch('New ToDo List')
		expect(data.labelTitle).toMatch('Title')
		expect(data.labelDescription).toMatch('Description')
		expect(data.validationMessage).toMatch('Fill out before submit')
		expect(data.inputTitle).toMatch('')
		expect(data.inputDescription).toMatch('')
	})

		const modalContainer = wrapper.get('div')
	it('has a modal container', () => {
		expect(modalContainer.exists()).toBeTruthy()
		expect(modalContainer.attributes('id')).toMatch('modal-container')
		expect(modalContainer.attributes('class')).toMatch('modal-card')
	})

	const modalHeader = modalContainer.get('header')
	it('has a modal header', () => {
		expect(modalHeader.exists()).toBeTruthy()
		expect(modalHeader.attributes('class')).toMatch('modal-card-head')
		expect(modalHeader.get('p').attributes('class')).toMatch('modal-card-title')
		expect(modalHeader.get('p').text()).toMatch('New ToDo')
		expect(modalHeader.get('button').attributes('class')).toMatch('delete')
	})

	const form = modalContainer.get('form')
	it('has a modal body - form', () => {
		expect(form.exists()).toBeTruthy()
		expect(form.attributes('id')).toMatch('todo-form')
		expect(form.attributes('class')).toMatch('modal-card-body')
	})

	it('has a title input', () => {
		expect(form.get("[label='Title']"))
		expect(form.get("[label='Title']").attributes('labelposition')).toMatch('on-border')
		expect(form.get("[label='Title'] > b-input-stub"))
	})

	it('has a description input', () => {
		expect(form.get("[label='Description']"))
		expect(form.get("[label='Description'] > b-input-stub"))
	})

	const modalFooter = modalContainer.get('footer')
	it('has a button section', () => {
		expect(modalFooter.exists()).toBeTruthy()
		expect(modalFooter.attributes('id')).toMatch('button-section')
		expect(modalFooter.attributes('class')).toMatch('modal-card-foot')
	})

	it('has a button to close', () => {
		const closeButton = modalFooter.get('button')
		expect(closeButton.exists()).toBeTruthy()
		expect(closeButton.attributes('type')).toMatch('button')
		expect(closeButton.attributes('class')).toMatch('button')
		expect(closeButton.text()).toMatch('Close')
	})

	it('has a button to accept', () => {
		const acceptButton = modalFooter.get('b-button-stub')
		expect(acceptButton.exists()).toBeTruthy()
		expect(acceptButton.attributes('type')).toMatch('is-success')
		expect(acceptButton.text()).toMatch('Accept')
	})
})
