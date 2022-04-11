// import { use } from "vue/types/umd"

// state
export const state = () => ({
  mytasks: [],
  alltasks: [],
  token: '',
})
// getters
export const getters = {
  // MyTodos(state) {
  //     return state.MyTodos;
}

// actions
export const actions = {
  async loginFromStore({ commit }, data) {
    await this.$axios
      .post('http://localhost:5048/api/user/Login', {
        name: data.name,
        password: data.password,
      })
      .then((response) => {
        console.log(response.data)
        commit('setToken', response.data)
        this.$router.push('/todos')
      })
    // console.log(res.data);
  },
  async getAllTodos({ commit, state }) {
    console.log(state.token)
    await this.$axios
      .get('http://localhost:5048/api/Todo', {
        headers: {
          Authorization: 'Bearer ' + state.token,
        },
      })
      .then((res) => {
        console.log(res.data)
        commit('setAllTasks', res.data)
      })
  },
  async GetMyTodos({ commit, state }) {
    console.log('ewfeuq')
    await this.$axios
      .get('http://localhost:5048/api/Todo', {
        headers: {
          Authorization: 'Bearer ' + state.token,
        },
      })
      .then((res) => {
        console.log(res.data)
        commit('setMyTasks', res.data)
      })
  },
  async addTodo({ commit, state }, data) {
    await this.$axios
      .post(
        'http://localhost:5048/api/Todo',
        {
          title: data.title,
          description: data.description,
        },
        {
          headers: {
            Authorization: 'Bearer ' + state.token,
          },
        }
      )
      .then((res) => {
        console.log('todo Cretaed')
      })
  },
  async deleteTodo({ commit, state }, data) {
    // console.log(id)
    await this.$axios
      .delete('http://localhost:5048/api/Todo/'+ data, {
        headers: {
          Authorization: 'Bearer ' + state.token,
        },
      })
      .then((res) => {
        console.log('deleted')
      })
  },
  async UpdateTodo({ commit }, Data) {
    await this.$axios
      .put(
        'http://localhost:5048/api/Todo' + Data.id,
        { title: Data.title, description: Data.description },
        { headers: { Authorization: 'Bearer ' + this.state.Token } }
      )
      .then((res) => {
        commit('updateTodo', res)
      })
  },
}

// mutations
export const mutations = {
  setToken(state, data) {
    state.token = data
  },
  setMyTasks(state, tasks) {
    state.mytasks = tasks
  },
  setAllTasks(state, tasks) {
    state.alltasks = tasks
  },
}
