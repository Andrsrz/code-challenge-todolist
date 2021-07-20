<template>
	<div id='todolists-list'>
		<ToDoList v-for='(todoList, index) in todoLists' :key='index' :todoList='todoList'/>
	</div>
</template>

<script lang='js'>
import ToDoList from '../components/ToDoList.vue'

export default{
	name: 'ToDoListsList',
	components: { ToDoList },
	data(){
		return{
			todoLists: [],
			isData: false
		}
	},
	methods: {
		init(){ this.getAll() },
		getAll(){
			fetch('http://localhost:3000/api/todolist/all', { method: 'GET' })
				.then(response => response.json())
				.then(data => {
					if(data.length !== 0){
						this.isData = true
						this.todoLists = data
					}
				}).catch(error => { console.error(error) })
		}
	},
	created(){ this.init() }
}
</script>

<style lang='css' scoped>
#todolists-list {
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
}
</style>
