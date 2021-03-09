<template>
  <div class="conatiner">
    <i class="fa fa-thumbs-up upvote-placement"><span class="remove-pointer"> {{ upvotes }}</span></i>
    <i class="fa fa-thumbs-down downvote-placement"><span class="remove-pointer"> {{ downvotes }}</span></i>
    <i class="fa fa-comments comments-placement"><span class="remove-pointer"> {{ comments }}</span></i>
  </div>
</template>

<script>
export default {
  name: 'footComponentQAHome',
  props: {
    upvotes: Number,
    downvotes: Number,
    comments: Number
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
    }
    .remove-pointer{
        cursor: auto;
    }
</style>
