import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import ToDosList from '@/components/ToDosList.vue'
import fetchMock from 'jest-fetch-mock'

fetchMock.enableMocks()
fetch.mockResponse(JSON.stringify({ data: {} }));

const localVue = createLocalVue()
localVue.use(Buefy)

const wrapper = shallowMount(ToDosList, { localVue })

describe('ToDos List Component', () => {
	it('exists', () => {
		expect(wrapper.exists()).toBeTruthy()
	})

	it('runs getAll on create', () => {
		expect(fetch).toBeCalledTimes(1)
	})

	it('sets data on fetch call', () => {
		const data = wrapper.vm.$data
		expect(typeof wrapper.vm.$data).toBe('object')
		expect(data.todos).toEqual({ data: {} })
		expect(data.isData).toBe(true)
	})

	it('has a div container', () => {
		expect(wrapper.find('#todos-list').exists()).toBe(true)
	})
})
