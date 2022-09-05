<template>
  <AddTodoItem
      @add_todo="Add_Todo"
  />
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
// import {v4 as uuidv4} from 'uuid'

import TodoListItem from "@/components/Page/TodoListItem";
import AddTodoItem from "@/components/Page/AddTodoItem";
import axios from 'axios'
export default {
  name: "TodoList",
  components: {AddTodoItem, TodoListItem},
  setup () {
/*    fetch('https://62b297ff20cad3685c902f74.mockapi.io/web')
        .then((res) => res.json())
        */
    const todos = ref([])
    const ListTodo = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(res.data)
        todos.value = res.data
      } catch (err) {
        alert(err)
      }
    }
    ListTodo()

    const ItemCheckBox = id => {
      todos.value = todos.value.map((todo) => {
        if(todo.id === id) todo.completed = !todo.completed
        return todo
      })
    }
    /*const DeleteItem = id => {
      todos.value = todos.value.filter(todo => todo.id !== id)
    }*/
    const DeleteItem = async (id) => {
      try {
        console.log("delete" + id)
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        todos.value = todos.value.filter(todo => todo.id !== id)
      }catch (err) {
        alert(err)
      }
    }
    const Add_Todo = async (newTodo) => {
      try {
        console.log('aaa')
        const res = await axios.post('https://jsonplaceholder.typicode.com/todos/',newTodo)
        console.log(res)
        todos.value.push(newTodo)
      }catch (err) {
        alert(err)
      }
      console.log(newTodo.id)

    }
    return {
      todos:todos,
      ItemCheckBox,
      DeleteItem,
      Add_Todo,
      ListTodo
    }
  }
}
</script>

<style scoped>
  h4 {
    color: #061515;
  }
</style>