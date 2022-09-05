<template>
  <header class="header">
    <h3>Vue</h3>
    <ul class="nav_link">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/products">Products</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
      <li>
        <router-link to="/todo">Todos</router-link>
      </li>
      <li>
        <router-link to="/user">User App</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "HeaderTodoList"
}
</script>

<style scoped>
  .header {
    background: #333;
    color: #fff;
    display: flex;
    justify-content: space-between;
    /*text-align: center;*/
    padding: 10px;
  }
  header ul.nav_link  {
    display: flex;
    align-items: center;
    margin: 0;
    justify-content: space-between;
    text-decoration: none;
    list-style: none;
  }
  header ul.nav_link li {
    padding: 10px;
  }
</style>