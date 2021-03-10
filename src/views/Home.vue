<template>
  <div>
    <navbar />
    <table id="table" cellspacing="20px">
        <tr>
        <td class="left"><sidebar /></td>
        <td class="middle">
          <div id="pagination-content">
            <div @click="toggleQuestion">
              <askQuestionHome :username="currentUser" />
            </div>
            <div v-show="questionShow" class="question-prompt-container">
              <questionsInputWidget class="question-prompt"/>
            </div>
            <div v-for="item in pageOfItems" :key="item.id" class="question-answer-card">
              <headComponentQAHome :username="item.username" />
              <questionComponentHome :question="item.question" :src="item.src"/>
              <answerComponentHome :answer="item.answer" :src="item.asrc" />
              <footComponentQAHome :comments="item.comments" :upvotes="item.upvotes" :downvotes="item.downvotes" :cid="item.qid+''+item.aid" :commentsData="commentsData" />
            </div>
          </div>
          <center class="pagination-placement">
            <jw-pagination :pageSize=5 :initialPage=count :items="response" @changePage="onChangePage" :styles="customStyles" :labels="customLabels"></jw-pagination>
          </center>
        </td>
        <td class="right"></td>
        </tr>
    </table>
  </div>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
import sidebar from '@/components/sidebar.vue'
import questionComponentHomeVue from '../components/questionComponentHome.vue'
import answerComponentHome from '../components/answerComponentHome.vue'
import footComponentQAHome from '../components/footComponentQAHome.vue'
import headComponentQAHome from '../components/headComponentQAHome.vue'
import askQuestionHome from '../components/askQuestionHome.vue'
import navbar from '../components/navbar.vue'
import questionsInputWidget from '../components/questionsInputWidget.vue'
const customStyles = {
  ul: {

  },
  li: {
    display: 'inline-block'
  },
  a: {

  }
}
const customLabels = {
  first: '<<',
  last: '>>',
  previous: '<',
  next: '>'
}
export default {
  name: 'home',
  data () {
    return {
      currentUser: 'Siddhant',
      i: 1,
      count: localStorage.getItem('count'),
      customStyles,
      customLabels,
      commentsData: [
        {
          commentId: '1',
          username: 'Preetham',
          commentText: 'Hey, nice comment man'
        },
        {
          commentId: '2',
          username: 'Akshay',
          commentText: 'Hey, nice comment man'
        },
        {
          commentId: '3',
          username: 'Aman Dhaka',
          commentText: 'Hey, nice comment man'
        }
      ],
      questionShow: false,
      response: [
        {
          qid: 1,
          aid: 1,
          question: 'What are we doing here?',
          src: require('../assets/space.jpg'),
          answer: 'We are making a Quora clone.',
          asrc: require('../assets/space.jpg'),
          comments: 10,
          upvotes: 200,
          downvotes: 1,
          username: 'Riya'
        },
        {
          qid: 2,
          aid: 2,
          question: 'What are we doing here?',
          src: require('../assets/space.jpg'),
          answer: 'We are making a Quora clone.',
          asrc: '',
          comments: 10,
          upvotes: 200,
          downvotes: 1,
          username: 'Riya'
        },
        {
          qid: 3,
          aid: 3,
          question: 'What are we doing here?',
          src: '',
          answer: 'We are making a Quora clone.',
          asrc: '',
          comments: 10,
          upvotes: 200,
          downvotes: 1,
          username: 'Riya'
        },
        {
          qid: 4,
          aid: 4,
          question: 'What are we doing here?',
          src: require('../assets/space.jpg'),
          answer: 'We are making a Quora clone.',
          asrc: require('../assets/space.jpg'),
          comments: 10,
          upvotes: 200,
          downvotes: 1,
          username: 'Riya'
        },
        {
          qid: 5,
          aid: 5,
          question: 'What are we doing here?',
          src: require('../assets/space.jpg'),
          answer: 'We are making a Quora clone.',
          asrc: require('../assets/space.jpg'),
          comments: 10,
          upvotes: 200,
          downvotes: 1,
          username: 'Riya'
        },
        {
          qid: 6,
          question: 'What are we doing here?',
          src: require('../assets/space.jpg'),
          answer: 'We are making a Quora clone.',
          asrc: require('../assets/space.jpg'),
          comments: 10,
          upvotes: 200,
          downvotes: 1,
          username: 'Riya'
        }
      ],
      pageOfItems: []
    }
  },
  methods: {
    onChangePage (pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems
    },
    toggleQuestion () {
      console.log('sdfsdfa')
      if (this.questionShow) {
        this.questionShow = false
      } else {
        this.questionShow = true
      }
    }
  },
  components: {
    sidebar: sidebar,
    questionComponentHome: questionComponentHomeVue,
    answerComponentHome: answerComponentHome,
    footComponentQAHome: footComponentQAHome,
    headComponentQAHome: headComponentQAHome,
    askQuestionHome: askQuestionHome,
    navbar: navbar,
    questionsInputWidget: questionsInputWidget
  }
}
</script>

<style scoped>
    #table{
      width: 100%;
      margin-top: 100px;
    }
    .left{
      width: 25%;
      top: 100px;
      margin-left: -80px;
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
    .pagination-placement{
      margin-bottom: 100px;
    }
    .question-prompt-container{
      padding-top: 10px;
      border: 1px solid whitesmoke;
      margin-bottom: 40px;
      margin-top: -15px;
      border-radius: 10px;
    }
</style>
