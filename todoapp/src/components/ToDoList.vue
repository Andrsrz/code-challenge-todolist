<template>
	<div id='todolist'>
		<div id='info-container' @click='goToDoList(todoList._id)' >
			<span id='title-container'>
				<h1>{{ todoList.title }}</h1>
				<p>Created On: {{ labelDate }}</p>
			</span>
			<h3>{{ todoList.description }}</h3>
		</div>
		<span id='button-container'>
			<b-button id='edit' type='is-warning' @click='editIt()'>{{ labelButtonEdit }}</b-button>
			<b-button id='delete' type='is-danger' @click='deleteIt()'>{{ labelButtonDelete }}</b-button>
		</span>
	</div>
</template>

<script lang='js'>
import ToDoListForm from '../components/ToDoListForm.vue'
import { EventBus } from '../EventBus.js'
import moment from 'moment'

export default{
	name: 'ToDoList',
	props: {
		todoList: Object
	},
	data(){
		return{
			labelDate: '',
			labelButtonEdit: 'Edit',
			labelButtonDelete: 'Delete'
		}
	},
	methods: {
		init(){ this.parseDate() },
		parseDate(){
			this.todoList.createdOn = moment(this.todoList.createdOn).format('MM/DD/YYYY')
			this.labelDate = moment(this.todoList.createdOn).format('MM/DD/YYYY')
		},
		goToDoList(id){
			this.$router.push({ name: 'ToDoList', params: { id } })
		},
		editIt(){
			this.$buefy.modal.open({
				parent: this,
				props: {
					todoList: this.todoList,
					type: 'update'
				},
				component: ToDoListForm,
				hasModalCard: true,
				trapFocus: true
			})
		},
		deleteIt(){
			fetch(`http://localhost:3000/api/todolist/delete?id=${this.todoList._id}`, { method: 'DELETE' })
				.then(response => response.json())
				.then(data => {
					console.log(data)
					EventBus.$emit('update-todolists')
				}).catch(error => { console.error(error) })
		}
	},
	created(){
		this.init()
	}
}
</script>

<style lang='css' scoped>
#todolist {
	width: 80%;
	display: flex;
	flex-flow: column nowrap;
	border-radius: 5px;
	border: 1px solid skyblue;
}

#todolist:hover {
	border: 3px solid skyblue;
}

#todolist > #info-container {
	display: flex;
	flex-flow: column nowrap;
}

#todolist > #info-container > #title-container:hover {
	cursor: pointer
}

#todolist > #info-container > #title-container {
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
}

#todolist > #button-container {
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-end;
}

* {
	margin: 2.5px;
	padding: 2.5px;
}
</style>
