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
})
