<template>
	<section id='container'>
		<span id='button-container'>
			<b-button id='goback' :label='labelButtonBack' title='Go Back' type='is-primary' @click='goBack()'/>
			<h1 class='is-size-4' >{{ todoListTitle }}</h1>
			<b-button id='todo' :label='labelButton' type="is-primary" @click="newToDo"/>
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
			labelButtonBack: 'Back',
			labelButton: 'New ToDo',
			parent: this.$router.currentRoute.params.id,
			todoListTitle: ''
		}
	},
	methods: {
		init(){ this.getToDoList() },
		getToDoList(){
			fetch(`http://localhost:3000/api/todolist/one?id=${this.parent}`, { method: 'GET' })
				.then(response => response.json())
				.then(data => {
					if(data.length !== 0){
						this.todoListTitle = data.title
					}
				}).catch(error => { console.error(error) })
		},
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
		},
		goBack(){
			this.$router.go(-1)
		}
	},
	created(){ this.init() }
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
	justify-content: space-around;
}
</style>
