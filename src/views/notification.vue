<template>
<div>
  <navbar style="z-index:2"/>
  <div class = 'notification'>
    <h3 id="notificationTitle">Notification</h3>
    <hr>
    <div class="user-notification" v-for="notification in notifications" :key="notification.id" :class="notification.read?'not-read':'read'">
        <p>Your <b><a @click="onClickNot(notification.questionId)">{{ notification.questionTitle }}</a></b> is Answered by <i>{{ notification.usernameAnswered }}</i></p>
    </div>
  </div>
</div>
</template>

<script>
import navbar from '../components/navbar.vue'
import axios from 'axios'
export default {
  name: 'notification',
  data () {
    return {
      notifications: []
    }
  },
  methods: {
    onClickNot (id) {
      this.$store.dispatch('setQuestionAnswerRequestDataAction', id)
    }
  },
  created () {
    const axiosConfig = {
      method: 'get',
      baseURL: 'http://10.177.68.81:8080/',
      url: `/notification/${localStorage.getItem('username')}/viewNotification`
    }
    axios(axiosConfig)
      .then(e => {
        console.log(e.data)
        this.notifications = e.data
      })
      .catch(e => console.log(e.data))
  },
  components: {
    navbar: navbar
  }
}
</script>
<style>
.notification a {
    cursor: pointer;
    text-decoration: none;
}
.read{
    padding:20px;
    margin-bottom: 5px;
    background-color: white;
}
.not-read{
    padding: 20px;
    margin-bottom: 5px;
    background-color: #f1f1f1;
}
#notificationTitle {
font-family: 'Inter', sans-serif;
}
.notification {
    position: absolute;
    width:40vw;
    height: 90vh;
    top:10%;
    left:20%;
    border: 2px solid #f1f1f1;
    padding: 10px;
}
.notification hr {
    padding: 0;
    border: none;
    border-top: medium double #333;
    color: #333;
    text-align: center;
}
</style>
