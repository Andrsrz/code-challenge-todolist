<template>
	<section id='home'>
		<span id='button-container'>
			<b-button :label='labelButton' type="is-primary" size="is-medium" @click="newToDoList"/>
		</span>
		<ToDoListsList/>
	</section>
</template>

<script lang='js'>
import ToDoListForm from '../components/ToDoListForm.vue'
import ToDoListsList from '../components/ToDoListsList.vue'

export default {
	name: 'Home',
	components: { ToDoListsList },
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

<style lang='css' scoped>
#home {
	width: 80%;
	height: 80%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
}

#button-container {
	display: flex;
	justify-content: center;
}
</style>
