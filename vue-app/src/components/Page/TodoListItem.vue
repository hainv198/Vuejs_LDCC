<template>
  <div :class="['d-flex mt-3 justify-content-around container bg-light', props.completed ? 'is_completed' : '']">
    <p>
      <input
          type="checkbox"
          :checked="props.completed"
          @change="todoCheck"
      >
      {{props.name}}
    </p>
    <button
        class="btn btn-danger"
        @click="handleDelete"
    >
      Delete
    </button>
  </div>
</template>

<script>
export default {
  name: "TodoListItem",
  props:['props'],
  setup (props, context) {
    const todoCheck = () => {
    /*  console.log(' check :::')
      console.log(props.props.completed )*/
      context.emit('handleClick', props.props.id)

    }
    const handleDelete = () => {
      console.log('delete' + props.props.id)
      context.emit('handleDelete', props.props.id)

    }
    return {
      todoCheck,
      handleDelete
    }
  }
}
</script>

<style scoped>
  .is_completed {
    text-decoration: line-through;
  }

</style>