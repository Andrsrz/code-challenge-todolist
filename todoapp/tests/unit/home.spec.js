import { shallowMount, createLocalVue } from '@vue/test-utils'
import router from '@/router'
import Buefy from 'buefy'
import Home from '@/views/Home.vue'
import ToDoListsList from '@/components/ToDoListsList.vue'

const localVue = createLocalVue()
localVue.use(Buefy)

const wrapper = shallowMount(Home, { router, localVue })

describe('Home Component', () => {
	it('renders a main div container', () => {
		expect(wrapper.get('#home').exists()).toBe(true)
	})

	const data = wrapper.vm.$data
	it('sets the default data', () => {
		expect(typeof wrapper.vm.$data).toBe('object')
		expect(data.labelButton).toMatch('New ToDo List')
	})

	it('has a ToDoListsList component', () => {
		expect(wrapper.get('#home').getComponent(ToDoListsList).exists()).toBe(true)
	})
})
