<template>
  <div id="app">
    <Home/>
		<ToDoForm/>
		<ToDoListForm/>
  </div>
</template>

<script>
import Home from './views/Home.vue'
import ToDoForm from './components/ToDoForm.vue'
import ToDoListForm from './components/ToDoListForm.vue'

export default {
  name: 'App',
  components: {
    Home,
		ToDoForm,
		ToDoListForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
