import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import ToDosList from '@/components/ToDosList.vue'

const localVue = createLocalVue()
localVue.use(Buefy)

const wrapper = shallowMount(ToDosList, { localVue })

describe('ToDos List Component', () => {
	it('exists', () => {
		expect(wrapper.exists()).toBeTruthy()
	})
})
