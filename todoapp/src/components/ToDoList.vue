<template>
	<div id='todolist'>
		<div id='info-container' @click='goToDoList(todoList._id)' >
			<span id='title-container'>
				<h1>{{ todoList.title }}</h1>
				<p>Created On: {{ todoList.createdOn }}</p>
			</span>
			<h3>{{ todoList.description }}</h3>
		</div>
		<span id='button-container'>
			<b-button type='is-warning' @click='editIt()'>{{ labelButtonEdit }}</b-button>
			<b-button type="is-danger">{{ labelButtonDelete }}</b-button>
		</span>
	</div>
</template>

<script lang='js'>
import ToDoListForm from '../components/ToDoListForm.vue'
import moment from 'moment'

export default{
	name: 'ToDoList',
	props: {
		todoList: Object
	},
	data(){
		return{
			labelButtonEdit: 'Edit',
			labelButtonDelete: 'Delete'
		}
	},
	methods: {
		init(){ this.parseDate() },
		parseDate(){
			this.todoList.createdOn = moment(this.todoList.createdOn).format('MM/DD/YYYY')
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
