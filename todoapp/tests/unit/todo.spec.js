import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import ToDo from '@/components/ToDo.vue'

const localVue = createLocalVue()
localVue.use(Buefy)

const wrapper = shallowMount(ToDo, { localVue })

describe('ToDo Component', () => {
	it('exists', () => {
		expect(wrapper.exists()).toBeTruthy()
	})
})
