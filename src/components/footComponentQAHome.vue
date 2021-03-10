<template>
  <div class="conatiner">
    <i class="fa fa-thumbs-up upvote-placement" @click="upvotes++"><span class="remove-pointer"> {{ upvotes }}</span></i>
    <i class="fa fa-thumbs-down downvote-placement" @click="downvotes++"><span class="remove-pointer"> {{ downvotes }} </span></i>
    <span class="remove-pointer comments-placement"> {{ comments }} </span><button class="fa fa-comments comments-placement" @click="toggleComments" :value="cid"></button>
    <commentsInputWidget :id="cid" class="show-comments" />
  </div>
</template>

<script>
import commentsInputWidget from './commentsInputWidget.vue'
export default {
  name: 'footComponentQAHome',
  components: {
    commentsInputWidget: commentsInputWidget
  },
  props: {
    upvotes: Number,
    downvotes: Number,
    comments: Number,
    cid: String
  },
  methods: {
    toggleComments (event) {
      var visibility = document.getElementById(event.target.value).style.display
      console.log(event.target.value)
      if (visibility === 'block') {
        document.getElementById(event.target.value).style.display = 'none'
      } else {
        document.getElementById(event.target.value).style.display = 'block'
      }
      console.log(document.getElementById(event.target.value).innerText)
    }
  }
}
</script>

<style scoped>
    .conatiner{
        padding: 10px;
        border: 1px solid whitesmoke;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        margin-left: 10px;
        margin-right: 10px;
    }
    .upvote-placement{
        cursor: pointer;
    }
    .downvote-placement{
        margin-left: 20px;
        margin-right: 20px;
        cursor: pointer;
    }
    .comments-placement{
        float: right;
        cursor: pointer;
        appearance: none;
        background-color: white;
        border: none;
    }
    .comments-placement:focus{
        outline: none;
    }
    .comments-placement:hover{
        outline: none;
    }
    .remove-pointer{
        cursor: auto;
    }
    .show-comments{
      display: none;
      margin-top: 10px;
      margin-left: -10px;
      margin-right: -10px;
    }
</style>
