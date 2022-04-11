<template>
  <div>
      <UserHeader/>
      <h3>Update Todo</h3>
      <form @submit.prevent="CreateTodo">
    <div class="container">
    <label for="title"><b>Title</b></label>
    <input type="text" v-model="data.title" placeholder="Enter Title" name="title" required>

    <label for="description"><b>Description</b></label>
    <input type="text" v-model="data.description" placeholder="Enter description" name="description" required>
        
    <button type="submit">Update</button>
    
  </div>
      </form>
  </div>
</template>

<script>
import UserHeader from "../components/UserHeader.vue"
 
export default {
components:{
    UserHeader,
},
data()
{
  return {
     title: '',
      description: '',
    data : {
      title: this.title,
      description: this.description,
    },
  };
},
methods: {
   async CreateTodo() {
     console.log(this.data)
     await this.$store.dispatch('addTodo',this.data)
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