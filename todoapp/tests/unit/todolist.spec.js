import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import ToDoList from '@/components/ToDoList.vue'

const localVue = createLocalVue()
localVue.use(Buefy)

const wrapper = shallowMount(ToDoList, { localVue })

describe('ToDoList Component', () => {
	it('exists', () => {
		expect(wrapper.exists()).toBeTruthy()
	})
})
