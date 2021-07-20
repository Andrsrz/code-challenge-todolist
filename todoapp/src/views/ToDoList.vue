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
				props: { parent: this.parent },
				component: ToDoForm,
				hasModalCard: true,
				customClass: 'custom-class custom-class-2',
				trapFocus: true
			})
		}
	}
}
</script>

<style lang='css' scoped>
#container {
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
