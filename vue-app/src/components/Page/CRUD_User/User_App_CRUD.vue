<template>
  <h1>Table user</h1>

  <ListUser
      v-for="user in List_user"
      v-bind:key="user.id"
      v-bind:data="user"
  />
</template>

<script>
import axios from "axios";
import {ref} from "vue";
import ListUser from "@/components/Page/CRUD_User/ListUserApp/ListUser";
export default {
  name: "User_App_CRUD",
  components: {ListUser},

  setup() {
    const List_user = ref([])
    const ListUsers = async () => {
      console.log('go go call api')
      try {
        const  res = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(res.data)
        List_user.value = res.data
      }catch (err) {
        alert(err)
      }
    }
    ListUsers()
    return {
      List_user,
      ListUsers
    }
  }

}
</script>

<style scoped>

</style>