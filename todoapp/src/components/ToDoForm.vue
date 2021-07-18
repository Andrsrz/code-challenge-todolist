<template>
	<div id='modal-container' class='modal-card' style='width=auto'>
		<header class='modal-card-head'>
			<p class='modal-card-title'>{{ modalTitle }}</p>
			<button class='delete' @click='close()'></button>
		</header>
		<form id='todo-form' class='modal-card-body'>
			<b-field :label='labelTitle' :label-position='labelsPosition'>
				<b-input></b-input>
			</b-field>
			<b-field :label='labelDescription' :label-position='labelsPosition'>
				<b-input></b-input>
			</b-field>
			<b-field :label='labelDueDate' :label-position='labelsPosition'>
				<b-datepicker :value='date'></b-datepicker>
			</b-field>
			<b-field :label='labelPriority' :label-position='labelsPosition'>
				<b-select :placeholder='selectPlaceholder'>
					<option v-for='priority in priorities' :value='priority' :key='priority'>
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
				date: new Date(),
				selectPlaceholder: 'Select a Priority',
				priorities: ['High', 'Neutral', 'Low']
			}
		},
		methods: {
			send(){
				console.log('send')
			},
			close(){
				this.$emit('close')
			}
		}
	}
</script>

<style>
@import '../assets/css/todo-form.css'
</style>
