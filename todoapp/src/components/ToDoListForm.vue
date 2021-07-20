<template>
	<div id='modal-container' class='modal-card' style='width=auto'>
		<header class='modal-card-head'>
			<p class='modal-card-title'>{{ modalTitle }}</p>
			<button class='delete' @click='close()'></button>
		</header>
		<form id='todo-form' class='modal-card-body'>
			<b-field :label='labelTitle' :label-position='labelsPosition'>
				<b-input type='text' :validatino-message='validationMessage' required v-model='inputTitle'>
				</b-input>
			</b-field>
			<b-field :label='labelDescription' :label-position='labelsPosition'>
				<b-input type='textarea' :validation-message='validationMessage' required v-model='inputDescription'>
				</b-input>
			</b-field>
		</form>
		<footer id='button-section' class='modal-card-foot'>
			<button class='button' type='button' @click='close()'>{{ labelClose }}</button>
			<b-button type='is-success' @click='send()'>
				{{ labelAccept }}
			</b-button>
		</footer>
	</div>
</template>

<script lang='js'>
	export default {
		name: 'ToDoListForm',
		props: {
			todoList: Object,
			type: String
		},
		data(){
			return{
				modalTitle: 'New ToDo List',
				labelTitle: 'Title',
				labelDescription: 'Description',
				labelAccept: 'Accept',
				labelClose: 'Close',
				labelsPosition: 'on-border',
				validationMessage: 'Fill out before submit',
				inputTitle: '',
				inputDescription: ''
			}
		},
		methods: {
			init(){
				if(this.type == 'update'){
					this.inputTitle = this.todoList.title
					this.inputDescription = this.todoList.description
				}
			},
			send(){
				if(this.validateInputs() && this.type == 'create'){
					fetch('http://localhost:3000/api/todolist/create', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							title: this.inputTitle,
							description: this.inputDescription
						})
					})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.error(error))
				}else if(this.validateInputs() && this.type == 'update'){
					fetch(`http://localhost:3000/api/todolist/update?id=${this.todoList._id}`, {
						method: 'PUT',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							title: this.inputTitle,
							description: this.inputDescription
						})
					})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.error(error))
				}
			},
			close(){
				this.$emit('close')
			},
			validateInputs(){
				if(this.inputTitle !== '' && this.inputDescription !== '')
					return true
				else
					return false
			}
		},
		created(){ this.init() }
	}
</script>
