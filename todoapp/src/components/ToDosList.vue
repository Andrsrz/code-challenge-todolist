<template>
	<div id='todos-list'>
		<ToDo v-for='(todo, index) in todos' :key='index' :todo='todo'/>
	</div>
</template>

<script lang='js'>
import ToDo from '../components/ToDo.vue'

export default{
	name: 'ToDosList',
	components: { ToDo },
	props: { parent: String },
	data(){
		return{
			todos: [],
			isData: false
		}
	},
	methods: {
		init(){ this.getAll() },
		getAll(){
			fetch(`http://localhost:3000/api/todo/all?parent=${this.parent}`, { method: 'GET' })
				.then(response => response.json())
				.then(data => {
					if(data.length !== 0){
						this.isData = true
						this.todos = data
					}
				}).catch(error => { console.error(error) })
		}
	},
	created(){ this.init() }
}
</script>

<style lang='css' scoped>
#todos-list {
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
}
</style>
