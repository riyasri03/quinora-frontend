<template>
  <div>
    <table class="q-table">
        <tr>
            <td class="q-left">
                <div v-for="item in response" :key="item.id" class="q-container">
                    <questionComponentHome :question="item.question" :src="item.src" />
                    <button class="a-btn">Answer</button>
                    <hr>
                </div>
            </td>
            <td class="q-right">
            </td>
        </tr>
    </table>
  </div>
</template>

<script>
import questionComponentHome from '../components/questionComponentHome.vue'
export default {
  name: 'questions',
  data () {
    return {
      response: [
        {
          question: 'What is this?',
          src: require('../assets/space.jpg')
        },
        {
          question: 'What is this?',
          src: ''
        },
        {
          question: 'What is this?',
          src: ''
        }
      ]
    }
  },
  components: {
    questionComponentHome: questionComponentHome
  }
}
</script>

<style scoped>
    *{
        outline: none;
    }
    body{
        outline: none;
    }
    .q-table{
        width: 100%;
        margin-top: 100px;
    }
    .q-left{
        width: 60%;
    }
    .q-right{
        width: 40%;
    }
    .q-container{
        margin: 20px;
    }
    .a-btn{
        margin-top: 5px;
        padding-left: 10px;
        padding-right: 10px;
        appearance: none;
        border: 1px solid #4ca7ff;
        background: white;
        border-radius: 10px;
        margin-bottom: 10px;
        margin-left: 10px;
        color: #4ca7ff;
    }
    .a-btn:focus{
        outline: none;
    }
    .a-btn:hover{
        background-color: #4ca7ff;
        color: white;
    }

</style>
