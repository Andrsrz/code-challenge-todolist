<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
		<polygon id='small' class='svg--sm' fill="skyblue" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
		<polygon id='large' class='svg--lg' fill="skyblue" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100"/>
	</svg>
</template>

<script lang='js'>
export default {
	name: 'PolygonC'
}
</script>

<style lang='css' scoped>
svg {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 150px;
}

@media (max-width: 699px) {
	.svg--lg {
	display: none;
	}
}

@media (min-width: 700px) {
	.svg--sm {
	display: none;
	}
}
</style>
