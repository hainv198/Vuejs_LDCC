<template>
  <TodoListItem
      v-for="todo in todos"
      v-bind:key="todo.id"
      v-bind:props="todo"
      @handleClick="ItemCheckBox"
      @handleDelete="DeleteItem"
  />
</template>

<script>

import {ref} from "vue";
import TodoListItem from "@/components/Page/TodoListItem";

export default {
  name: "TodoList",
  components: {TodoListItem},
  setup () {
/*    fetch('https://62b297ff20cad3685c902f74.mockapi.io/web')
        .then((res) => res.json())
        */
    const todos = ref([
      {
        id: 1,
        name : "Hai mv",
        address: "Dong me",
        Phone : "0123456789",
        completed: false
      },
      {
        id: 2,
        name : "Hai ",
        address: "Me Tri",
        Phone : "01289",
        completed: false
      },
    ])
    const ItemCheckBox = id => {
      todos.value = todos.value.map((todo) => {
        if(todo.id === id) todo.completed = !todo.completed
        return todo
      })
    }
    const DeleteItem = id => {
      todos.value = todos.value.filter(todo => todo.id !== id)
    }
    return {
      todos:todos,
      ItemCheckBox,
      DeleteItem
    }
  }
}
</script>

<style scoped>
  h4 {
    color: #061515;
  }
</style>