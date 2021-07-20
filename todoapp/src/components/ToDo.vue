<template>
	<div id='todo' :class='todo.priority'>
		<b-checkbox v-model='todo.done' type="is-success"></b-checkbox>
		<span id='title-container'>
			<h1>{{ todo.title }}</h1>
			<p>Due Date: {{ todo.dueDate }}</p>
		</span>
		<h3>{{ todo.description }}</h3>
	</div>
</template>

<script lang='js'>
import moment from 'moment'

export default{
	name: 'ToDo',
	props: { todo: Object },
	methods: {
		init(){ this.parseDate() },
		parseDate(){
			this.todo.dueDate = moment(this.todo.dueDate).format('MM/DD/YYYY')
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

* {
	margin: 5px;
	padding: 2.5px;
}
</style>
