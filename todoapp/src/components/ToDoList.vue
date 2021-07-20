<template>
	<div id='todolist' @click='goToDoList(todoList._id)'>
		<span id='title-container'>
			<h1>{{ todoList.title }}</h1>
			<p>Created On: {{ todoList.createdOn }}</p>
		</span>
		<h3>{{ todoList.description }}</h3>
	</div>
</template>

<script lang='js'>
import moment from 'moment'

export default{
	name: 'ToDoList',
	props: {
		todoList: Object
	},
	methods: {
		init(){ this.parseDate() },
		parseDate(){
			this.todoList.createdOn = moment(this.todoList.createdOn).format('MM/DD/YYYY')
		},
		goToDoList(id){
			this.$router.push({ name: 'ToDoList', params: { id } })
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
	cursor: pointer;
	border: 3px solid skyblue;
}

#todolist > #title-container {
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
}

* {
	margin: 5px;
	padding: 2.5px;
}
</style>
