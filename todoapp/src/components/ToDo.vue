<template>
	<div class='todo'>
		{{ todo }}
	</div>
</template>

<script lang='js'>
export default{
	name: 'ToDo',
	props: { todo: Object }
}
</script>
