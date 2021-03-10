<template>
  <div>
    <navbar />
    <div class="margin-top-parent">
        <table class="table-parent">
            <tr>
                <td class='left'>
                </td>
                <td class='middle'>
                    <div class='q-a-head'>Question</div>
                </td>
                <td class='right'>
                </td>
            </tr>
            <tr>
                <td class='left'>
                </td>
                <td class='middle'>
                    <div v-for="item in getQuestionAnswerData" :key="item.id">
                        <div class="q-a-parent">
                            <headComponentQAHome :username="item.userName.substring(0,1).toUpperCase() + '' + item.userName.substring(1,item.userName.length)" />
                            <answerComponentHome :answer="item.answerText.substring(0,1).toUpperCase() + '' + item.answerText.substring(1,item.answerText.length)" :src="item.imgsrc" />
                            <footComponentQAHome :comments="item.commentList.length" :upvotes="item.likes" :downvotes="item.dislikes" :cid="item.qusetionID+''+item.id" :commentsData="item.commentList" :answerId="item.id" />
                        </div>
                    </div>
                </td>
                <td class="right">
                </td>
            </tr>
        </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import navbar from '../components/navbar.vue'
import headComponentQAHome from '../components/headComponentQAHome.vue'
import answerComponentHome from '../components/answerComponentHome.vue'
import footComponentQAHome from '../components/footComponentQAHome.vue'
export default {
  name: 'questionAnswer',
  computed: {
    ...mapGetters(['getQuestionAnswerData'])
  },
  created () {
    this.$store.dispatch('setQuestionAnswerRequestDataAction')
  },
  components: {
    headComponentQAHome: headComponentQAHome,
    answerComponentHome: answerComponentHome,
    footComponentQAHome: footComponentQAHome,
    navbar: navbar
  }
}
</script>

<style>
    .q-a-head{
        margin-left: 10px;
    }
    .margin-top-parent{
        margin-top: 100px;
    }
    .table-parent{
        width: 100%;
    }
    .q-a-parent{
        width: 100%;
        padding: 10px;
        border: 1px solid lightgray;
        border-radius: 10px;
        margin: 10px;
        margin-bottom: 20px;
    }
    .left{
        width: 20%
    }
    .middle{
        width: 45%;
    }
    .right{
        width: 35%;
    }
</style>
