<template>
	<div id="app">
		<Home/>
		<PolygonC/>
	</div>
</template>

<script>
import Home from './views/Home.vue'
import PolygonC from './components/PolygonC.vue'

export default {
	name: 'App',
	components: { Home, PolygonC }
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
