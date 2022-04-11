<template>
  <div>
      <ul>
       <li><nuxt-link class="active" to="/todos">Home</nuxt-link></li>
       <li><nuxt-link class="active" to="/CreateTodo">CreateTodo</nuxt-link></li>
      <li><nuxt-link to="/GetAllTodos">GetAllTodos</nuxt-link></li>
      <li><nuxt-link to="/">Logout</nuxt-link></li>
      </ul>
  </div>
</template>

<script>
export default {
    name :"UserHeader"

}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}

</style>