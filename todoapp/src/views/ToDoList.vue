<template>
	<section id='container'>
		<span id='button-container'>
			<b-button :label='labelButton' type="is-primary" size="is-medium" @click="newToDo"/>
		</span>
		<ToDosList :parent='parent'/>
	</section>
</template>

<script lang='js'>
import ToDoForm from '../components/ToDoForm.vue'
import ToDosList from '../components/ToDosList.vue'

export default {
	name: 'ToDoList',
	components: { ToDosList },
	data(){
		return {
			labelButton: 'New ToDo',
			parent: this.$router.currentRoute.params.id
		}
	},
	methods: {
		newToDo() {
			this.$buefy.modal.open({
				parent: this,
				props: {
					parent: this.parent,
					type: 'create'
				},
				component: ToDoForm,
				hasModalCard: true,
				trapFocus: true
			})
		}
	}
}
</script>

<style lang='css' scoped>
#container {
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
