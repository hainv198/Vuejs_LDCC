<template>
  <div id="app">
    <HeaderTodoList/>
    <TodoList/>
  </div>

</template>

<script>
import HeaderTodoList from "@/components/Layout/HeaderTodoList";
import TodoList from "@/components/Page/TodoList";
export default {
  name: 'app',
  components: {HeaderTodoList, TodoList}
}
</script>

<style>
  #app {
    font-family: Calibri ;
  }
</style>

