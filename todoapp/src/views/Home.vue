<template>
	<section id='home'>
		<span id='button-container'>
			<b-button :label='labelButton' type="is-primary" size="is-medium" @click="newToDoList"/>
		</span>
		<ToDoListsList/>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
		<polygon class='svg--sm' fill="skyblue" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100" />
		<polygon class='svg--lg' fill="skyblue" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
	</svg>
	</section>
</template>

<script lang='js'>
import ToDoListForm from '../components/ToDoListForm.vue'
import ToDoListsList from '../components/ToDoListsList.vue'

export default {
	name: 'Home',
	components: { ToDoListsList },
	data(){
		return {
			labelButton: 'New ToDo List'
		}
	},
	methods: {
		newToDoList() {
			this.$buefy.modal.open({
				parent: this,
				component: ToDoListForm,
				hasModalCard: true,
				customClass: 'custom-class custom-class-2',
				trapFocus: true
			})
		}
	}
}
</script>

<style lang='css' scoped>
#home {
	width: 80%;
	height: 80%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
}

#button-container {
	display: flex;
	justify-content: center;
}

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
