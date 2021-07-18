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
			send(){
				if(this.validateInputs())
					console.log('send')
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
		}
	}
</script>
