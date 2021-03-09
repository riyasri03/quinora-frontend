<template>
  <div>
    <table cellspacing="20px">
        <tr>
        <td class="left"><sidebar /></td>
        <td class="middle">
          <div id="pagination-content">
            <div v-for="c in count" :key="c.id" class="question-answer-card">
              <headComponentQAHome :username="username" />
              <questionComponentHome :question="question" :src="src"/>
              <answerComponentHome :answer="answer" :src="asrc" />
              <footComponentQAHome :comments="comments" :upvotes="upvotes" :downvotes="downvotes" />
            </div>
          </div>
        </td>
        <td class="right"></td>
        </tr>
    </table>
  </div>
</template>

<script>
import sidebar from '@/components/sidebar.vue'
import questionComponentHomeVue from '../components/questionComponentHome.vue'
import answerComponentHome from '../components/answerComponentHome.vue'
import footComponentQAHome from '../components/footComponentQAHome.vue'
import headComponentQAHome from '../components/headComponentQAHome.vue'
export default {
  name: 'home',
  data () {
    return {
      question: 'What are we doing here?',
      src: require('../assets/space.jpg'),
      answer: 'We are making a Quora clone.',
      asrc: require('../assets/space.jpg'),
      count: 5,
      comments: 10,
      upvotes: 200,
      downvotes: 1,
      username: 'Riya'
    }
  },
  components: {
    sidebar: sidebar,
    questionComponentHome: questionComponentHomeVue,
    answerComponentHome: answerComponentHome,
    footComponentQAHome: footComponentQAHome,
    headComponentQAHome: headComponentQAHome
  }
}
</script>

<style scoped>
    table{
        width: 100%;
    }
    .left{
        width: 25%;
        top: 28px;
        margin-left: -60px;
        position: fixed;
    }
    .middle{
        width: 50%;
    }
    .right{
        width: 25%;
    }
    table td, table td * {
        vertical-align: top;
    }
    .question-answer-card{
        margin-bottom: 30px;
        padding: 10px;
        border: 1px solid lightgray;
        border-radius: 10px;
    }
</style>
