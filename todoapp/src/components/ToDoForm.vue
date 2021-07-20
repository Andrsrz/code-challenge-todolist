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
			<b-field :label='labelDueDate' :label-position='labelsPosition'>
				<b-datepicker v-model='date'
											:min-datetime='today'
											:validation-message='validationMessage'
											required>
				</b-datepicker>
			</b-field>
			<b-field :label='labelPriority' :label-position='labelsPosition'>
				<b-select :placeholder='selectPlaceholder' :validation-message='validationMessage' required v-model='inputPriority'>
					<option v-for='priority in priorities'
									:value='priority'
									:key='priority'>
						{{ priority }}
					</option>
				</b-select>
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
		name: 'ToDoForm',
		props: {
			parent: String,
			todo: Object,
			type: String
		},
		data(){
			return {
				modalTitle: 'New ToDo',
				labelTitle: 'Title',
				labelDescription: 'Description',
				labelDueDate: 'Due Date',
				labelPriority: 'Priority',
				labelClose: 'Close',
				labelAccept: 'Accept',
				labelsPosition: 'on-border',
				today: new Date(),
				date: new Date(),
				selectPlaceholder: 'Select a Priority',
				priorities: ['High', 'Neutral', 'Low'],
				validationMessage: 'Fill out before submit',
				inputTitle: '',
				inputDescription: '',
				inputPriority: ''
			}
		},
		methods: {
			init(){
				if(this.type == 'update'){
					this.inputTitle = this.todo.title
					this.inputDescription = this.todo.description
					this.date = new Date(this.todo.dueDate)
					this.inputPriority = this.todo.priority
				}
			},
			send(){
				if(this.validateInputs() && this.type == 'create'){
					fetch('http://localhost:3000/api/todo/create', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							title: this.inputTitle,
							description: this.inputDescription,
							dueDate: this.date,
							priority: this.inputPriority,
							parent: this.parent
						})
					})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.error(error))
				}else if(this.validateInputs() && this.type == 'update'){
					fetch(`http://localhost:3000/api/todo/update?id=${this.todo._id}`, {
						method: 'PUT',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							title: this.inputTitle,
							description: this.inputDescription,
							dueDate: this.date,
							priority: this.inputPriority,
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
				if(this.inputTitle !== '' && this.inputDescription !== '' && this.inputPriority !== '' && this.date)
					return true
				else
					return false
			}
		},
		created(){ this.init() }
	}
</script>

<style>
@import '../assets/css/todo-form.css'
</style>
