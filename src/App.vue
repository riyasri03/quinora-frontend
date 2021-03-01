<template>
  <div id="app">
    <h1>{{message}}</h1>
    <div v-html="btnhtml"></div>
    <input type="text" v-model="text">
    <p v-if="text==='Aman'">Hey Aman</p>
    <p v-else>Wrong person</p>
    <h3>{{text}}</h3>
    <button v-on:click="update">Update</button>
    <h2>{{count}}</h2>
    <h3>{{topicNum}}</h3>
    <br>
    <input type="text" placeholder="Task" v-model="task">
    <button @click="updateTodo()">Add</button>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{todo}}
      </li>
    </ul>
    <input type="text" placeholder="Title" v-model="title">
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      count: 0,
      message: 'Clicked',
      btnhtml: '<button>Click</button>',
      text: '',
      arr: ['java', 'c++', 'python'],
      todos: [],
      task: '',
      title: ''
    }
  },
  methods: {
    update () {
      return this.count++
    },
    updateTodo () {
      this.todos.push(this.task)
      this.task = ''
    }
  },
  watch: {
    title (newVal, oldVal) {
      alert(newVal + ' ' + oldVal)
    }
  },
  computed: {
    topicNum () {
      return this.arr.length
    }
  },
  created () {
    console.log('Created')
  },
  mounted () {
    setInterval(() => { this.count++ }, 100)
  }
}
</script>

<style lang="scss">
</style>
