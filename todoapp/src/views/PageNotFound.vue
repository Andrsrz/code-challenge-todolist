<template>
	<div id='page-not-found-container'>
		<div id='page-not-found'>
			<h1 class='is-size-1'>{{ title }}</h1>
			<b-button title='Go Back' type='is-primary' @click='goBack()'>
				{{ labelButton }}
			</b-button>
		</div>
	</div>
</template>

<script lang='js'>
export default {
	name: 'PageNotFound',
	data(){
		return{
			title: 'Page Not Found',
			labelButton: 'Go Back'
		}
	},
	methods: {
		goBack(){
			this.$router.go(-1)
		}
	}
}
</script>

<style scoped>
#page-not-found-container {
	width: 100%;
}

#page-not-found {
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
}
</style>
