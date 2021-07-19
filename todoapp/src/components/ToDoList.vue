<template>
	<div class='todolist'>
		{{ todoList }}
	</div>
</template>

<script lang='js'>
export default{
	name: 'ToDoList',
	props: {
		todoList: Object
	}
}
</script>
