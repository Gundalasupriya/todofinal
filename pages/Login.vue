<template>
  <div>
      <Header />
      <form @submit.prevent="loginFromStore">
    <div class="container">
    <label for="name"><b>Name</b></label>
    <input type="text" v-model="data.name" placeholder="Enter name" name="name" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" v-model="data.password" placeholder="Enter Password" name="psw" required>
        
    <button type="submit">Login</button>
    
  </div>
      </form>
  </div>
</template>

<script>
import Header from "../components/Header.vue"

export default {
    omponents:{
    Header,
},
data()
{
  return {
     name: '',
      password: '',
    data : {
      name: this.name,
      password: this.password,
    },
  };
},
methods: {
   async loginFromStore() {
     console.log(this.data)
     await this.$store.dispatch('loginFromStore',this.data)
       this.$router.push('/todos');
   }
}
}


</script>


<style>
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}

</style>