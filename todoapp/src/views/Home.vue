<template>
	<section id='home'>
		<span id='button-container'>
			<b-button :label='labelButton' type="is-primary" @click="newToDoList"/>
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
				props: { type: 'create' },
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
	width: 100%;
	height: 90%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	overflow-y: scroll;
	padding-top: 5px;
	padding-bottom: 50px;
}

#button-container {
	display: flex;
	justify-content: center;
}
</style>
