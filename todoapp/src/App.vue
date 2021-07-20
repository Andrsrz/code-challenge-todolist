<template>
	<div id="app">
		<router-view></router-view>
		<PolygonC/>
	</div>
</template>

<script>
import PolygonC from './components/PolygonC.vue'

export default {
	name: 'App',
	components: { PolygonC }
}
</script>

<style lang='css'>
#app {
	width: 100%;
	height: 100%;
	overflow-y: hidden;
	display: flex;
	justify-content: center;
}
</style>
