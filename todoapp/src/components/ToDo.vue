<template>
	<div id='todo' :class='todo.priority'>
		<b-checkbox v-model='done' type='is-success'></b-checkbox>
		<span id='title-container' :class='disabled'>
			<h1>{{ todo.title }}</h1>
			<p>Due Date: {{ labelDueDate }}</p>
		</span>
		<h3 :class='disabled'>{{ todo.description }}</h3>
		<span id='button-container'>
			<b-button type='is-warning' @click='editIt()' :disabled='done'>{{ labelButtonEdit }}</b-button>
			<b-button type='is-danger' @click='deleteIt()'>{{ labelButtonDelete }}</b-button>
		</span>
	</div>
</template>

<script lang='js'>
import ToDoForm from '../components/ToDoForm.vue'
import { EventBus } from '../EventBus.js'
import moment from 'moment'

export default{
	name: 'ToDo',
	props: { todo: Object },
	data(){
		return{
			done: this.todo.done,
			disabled: '',
			labelDueDate: '',
			labelButtonEdit: 'Edit',
			labelButtonDelete: 'Delete'
		}
	},
	methods: {
		init(){
			this.parseDate()
			this.disabled = this.done ? 'disabled' : ''
		},
		parseDate(){
			this.todo.dueDate = moment(this.todo.dueDate).format('MM/DD/YYYY')
			this.labelDueDate = moment(this.todo.dueDate).format('MM/DD/YYYY')
		},
		editIt(){
			if(!this.done){
				this.$buefy.modal.open({
					parent: this,
					props: {
						todo: this.todo,
						type: 'update'
					},
					component: ToDoForm,
					hasModalCard: true,
					trapFocus: true
				})
			}
		},
		deleteIt(){
			fetch(`http://localhost:3000/api/todo/delete?id=${this.todo._id}`, { method: 'DELETE' })
				.then(response => response.json())
				.then(data => {
					console.log(data)
					EventBus.$emit('update-todo')
				}).catch(error => { console.error(error) })
		}
	},
	watch: {
		done: function(){
			this.disabled = this.done ? 'disabled' : ''
			fetch(`http://localhost:3000/api/todo/done?id=${this.todo._id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					done: this.done
				})
			})
			.then(response => response.json())
			.then(data => {
				console.log(data)
				EventBus.$emit('update-todo')
			})
			.catch(error => console.error(error))
		}
	},
	created(){ this.init() }
}
</script>

<style lang='css' scoped>
#todo {
	width: 80%;
	display: flex;
	flex-flow: column nowrap;
	border-radius: 5px;
}

.disabled {
	text-decoration: line-through;
	opacity: 0.4;
}

.High {
	border: 1px solid red;
}

.Neutral {
	border: 1px solid orange;
}

.Low {
	border: 1px solid yellow;
}

.High:hover {
	border: 3px solid red;
}

.Neutral:hover {
	border: 3px solid orange;
}

.Low:hover {
	border: 3px solid yellow;
}

#todo > #title-container {
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
}

#todo > #button-container {
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-end;
}

* {
	margin: 2.5px;
	padding: 2.5px;
}
</style>
