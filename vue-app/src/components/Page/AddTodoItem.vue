<template>
  <h1>Add todo </h1>
  <form @submit="handleSubmit" >
    <input
        type="text"
        placeholder="add todo"
        v-model="title"
    >
<!--        @input="check"-->
    <input type="submit" value="Add New Todo">
  </form>
</template>

<script>
import {ref} from "vue";
// import {v4 as uuidv4} from 'uuid'
export default {
  name: "AddTodoItem",
  setup (props,context) {
    //khởi tạo ref giá trị ban đầu
    const title = ref('')
    console.log(title)
    //hàm kiểm tra value nhập vào input
    /*const check = () => {
      console.log(title.value)
    }*/
    const handleSubmit = (e) => {
      //chống hành động submit mặc định của form
      e.preventDefault()
      if(title.value === '') alert('please input value')
      if (title.value !== '') {
        //Khởi tạo new todo
        const newTodo = {
          // id: uuidv4(),
          // new todo === title.value
          name : title.value,
          address: "Me Tri",
          Phone : "01289",
          completed: false
        }
        //sử dụng context để truyền ngược giá trị lên component cha
        context.emit('add_todo', newTodo)
      }
      //reset value
      title.value = ''
    }
    return {
      title, handleSubmit
    }
  }
}


</script>

<style scoped>
  form {
    display: flex;
  }
  input[type='text'] {
    flex: 10;
    padding: 5px;
  }
  input[type='submit'] {
    flex: 2;
  }
</style>