<template>
  <div class="container">
      <div class="inner-container-ask-question">
        <b>{{ username }}</b>
        <div class="inner-container-text">
            Ask your question here.
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'askQuestionHome',
  props: {
    username: String
  }
}
</script>

<style>
    .container{
        padding: 10px;
        border-radius: 10px;
        width: 100%;
    }
    .inner-container-ask-question{
        border: 1px solid whitesmoke;
        padding: 10px;
        margin-left: -10px;
        margin-right: -10px;
        border-radius: 10px;
        margin-bottom: 20px;
        cursor: pointer;
    }
    .inner-container-text{
        font-size: 20px;
        color: lightgray;
    }
</style>
