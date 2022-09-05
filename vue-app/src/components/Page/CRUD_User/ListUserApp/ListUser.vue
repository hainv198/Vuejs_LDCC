<template>
  <table class="table caption-top">
    <caption>List of users</caption>
    <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Address</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Website</th>

    </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="row">{{data.id}}</th>
      <td>{{data.name}}</td>
      <td>{{data.address.street}}</td>
      <td>{{data.email}}</td>
      <td>{{data.phone}}</td>
      <td>{{data.website}}</td>

    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "ListUser",
  props:['data']
}
</script>

<style scoped>

</style>