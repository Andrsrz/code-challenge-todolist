import { shallowMount, createLocalVue } from '@vue/test-utils'
import PolygonC from '@/components/PolygonC.vue'

const localVue = createLocalVue()

const wrapper = shallowMount(PolygonC, { localVue })

describe('PolygonC Component', () => {
	it('exists', () => {
		expect(wrapper.exists()).toBeTruthy()
	})

	it('has a svg main tag', () => {
		expect(wrapper.get('svg').exists()).toBe(true)
	})

	it('has two polygons', () => {
		expect(wrapper.get('svg').get('#small').exists()).toBe(true)
		expect(wrapper.get('svg').get('#large').exists()).toBe(true)
	})
})
