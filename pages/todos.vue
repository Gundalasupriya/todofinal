<template>
  <div>
      <UserHeader/>
      <br>
      <!-- <h1>{{ this.$store.state.token}}</h1>
      <h1>Todo HomePage</h1> -->
      <table id="customers">
      <tr>
        <th>Sno</th>
        <!-- <th></th> -->
        <th>TodoId</th>
        <th>TodoTitle</th>
        <th>Description</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
      <tr id="list" v-for="(task, i) in $store.state.mytasks" :key="i">
      <td >
        {{ i+1 }}
      </td>
      <!-- <td> ----</td> -->
       <td >
        {{ task.todoId }}
      </td>
       <td >
        {{ task.title }}
      </td>
      <td >
        {{ task.description }}
      </td>
       <td >
         <button
              id="btnSearch"
              class="btn btn-info btn-md center-block"
              Style="width: 100px;"
            >
              <nuxt-link
                :to="{ name: 'UpdateTodo', params: { id: task.todoId } }"
                >Update</nuxt-link
              >
            </button>
      </td>
       <td >
         <button
              id="btnClear"
              class="btn btn-danger btn-md center-block"
              Style="width: 100px;"
              @click="deleteTodo(task.todoId)"
            >
              Delete
            </button>
      </td>
    </tr>
      </table>


  </div>
</template>

<script>
import UserHeader from "../components/UserHeader.vue"
 
export default {
components:{
    UserHeader,
},
 async mounted() {
    await this.$store.dispatch("GetMyTodos");
    return;
  },
  methods: {
    async deleteTodo(id) {
      console.log(id);
      await this.$store.dispatch("deleteTodo", id);
      await this.$store.dispatch("GetMyTodos");
    },
  },
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