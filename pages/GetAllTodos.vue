<template>
  <div>
    <UserHeader />
    <h1>AllTodos:</h1>
          <table id="customers">
      <tr>
        <th>Sno</th>
        <!-- <th></th> -->
        <!-- <th>TodoId</th> -->
        <th>Description</th>
     
      </tr>
      <tr id="list" v-for="(task, i) in $store.state.alltasks" :key="i">
      <td >
        {{ i+1 }}
      </td>
      <!-- <td> ----</td> -->
      
      <td >
        {{ task.description }}
      </td>
      </tr>
      </table>

  
  </div>
</template>

<script>
import UserHeader from '../components/UserHeader.vue'
export default {
  components: {
    UserHeader,
  },
  
  async created() {
    await this.$store.dispatch("getAllTodos");
    return;
  },
  methods: {
   
  }
}

</script>

<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>
