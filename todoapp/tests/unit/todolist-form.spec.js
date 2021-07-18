import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import ToDoListForm from '@/components/ToDoListForm.vue'

const localVue = createLocalVue()
localVue.use(Buefy)

const wrapper = shallowMount(ToDoListForm, { localVue })

descirbe('ToDo List Form', () => {
	it('should set the correct default data', () => {
		const data = wrapper.vm.$data
		expect(typeof wrapper.vm.$data).toBe('object')
	})
})
