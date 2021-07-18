<template>
	<form id='todo-form'>
		<section id='input-section'>
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
		</section>
		<section id='button-section'>
			<b-button type='is-success' @click='send()'>
				{{ labelAccept }}
			</b-button>
		</section>
	</form>
</template>

<script lang='js'>
	export default {
		name: 'ToDoForm',
		data(){
			return {
				labelTitle: 'Title',
				labelDescription: 'Description',
				labelDueDate: 'Due Date',
				labelPriority: 'Priority',
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
			}
		}
	}
</script>

<style>
@import '../assets/css/todo-form.css'
</style>
