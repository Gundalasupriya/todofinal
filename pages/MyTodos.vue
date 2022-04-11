<template>
  <div>
    <UserHeader />  
   
      <h2>MyTodo</h2>
      
  </div>
</template>

<script>
export default {

data() {
        return {
            todo: '',
        }
    },
    created() {
        this.getMyTodos();
    },
    methods: {
         async getMyTodos() {
          await this.$store.dispatch('getMyTodos')
        },
         async addTodo(todo) {
          await this.$store.dispatch('addTodo', todo);
          await this.$store.dispatch('getMyTodos');
        },
         async deleteTodo(id) {
          await this.$store.dispatch('deleteTodo', id);
          await this.$store.dispatch('getMyTodos')
        },
           async  update(id) {
         await  this.$store.dispatch('update', id);
          await this.$store.dispatch('getMyTodos')
        }
    }
}
</script>

<style scoped>




</style>