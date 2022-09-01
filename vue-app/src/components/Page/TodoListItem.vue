<template>
  <div class="d-flex mt-3 justify-content-around container bg-light">
    <input type="checkbox">
    {{props.name}}
    <button class="btn btn-danger">Delete</button>
  </div>
</template>

<script>
export default {
  name: "TodoListItem",
  props:['props']
}
</script>

<style scoped>

</style>