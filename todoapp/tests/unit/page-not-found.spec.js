import { shallowMount, createLocalVue } from '@vue/test-utils'
import router from '@/router'
import Buefy from 'buefy'
import PageNotFound from '@/views/PageNotFound.vue'

const localVue = createLocalVue()
localVue.use(Buefy)

const wrapper = shallowMount(PageNotFound, { router, localVue })

describe('PageNotFound View', () => {
	it('Renders a main div container', () => {
		expect(wrapper.get('#page-not-found')).toBeTruthy()
	})

	const data = wrapper.vm.$data
	it('Should set the default data', () => {
		expect(typeof wrapper.vm.$data).toBe('object')
		expect(data.title).toMatch('Page Not Found')
		expect(data.labelButton).toMatch('Go Back')
	})
})
