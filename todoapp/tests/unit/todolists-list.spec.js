import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import ToDoListsList from '@/components/ToDoListsList.vue'

const localVue = createLocalVue()
localVue.use(Buefy)

const wrapper = shallowMount(ToDoListsList, { localVue })

describe('ToDoLists List Component', () => {
	it('exists', () => {
		expect(wrapper.exists()).toBeTruthy()
	})
})
