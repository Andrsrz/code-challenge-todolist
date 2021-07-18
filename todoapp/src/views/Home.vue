<template>
	<section id='home'>
		<b-button :label='labelButton' type="is-primary" size="is-medium" @click="newToDoList"/>
	</section>
</template>

<script lang='js'>
import ToDoListForm from '../components/ToDoListForm.vue'

export default {
	name: 'Home',
	data(){
		return {
			labelButton: 'New ToDo List'
		}
	},
	methods: {
		newToDoList() {
			this.$buefy.modal.open({
				parent: this,
				component: ToDoListForm,
				hasModalCard: true,
				customClass: 'custom-class custom-class-2',
				trapFocus: true
			})
		}
	}
}
</script>
