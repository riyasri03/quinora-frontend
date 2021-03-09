<template>
  <div class="conatiner">
      <div class="question">
          Question: {{ question }}
      </div>
      <div class="question-image">
        <img :src="src" width="300px" class="image-css" />
      </div>
  </div>
</template>

<script>
export default {
  name: 'questionComponentHome',
  props: {
    question: String,
    src: String
  }
}
</script>

<style scoped>
    .question{
        display: block;
        padding: 10px;
        width: 100%;
        font-weight: bold;
    }
    .question-image{
        text-align: center;
        padding: 10px;
        background: whitesmoke;
        border-radius: 10px;
    }
    .container{
        padding: 10px;
        margin: 10px;
        border: 1px solid whitesmoke;
        border-radius: 10px;
    }
    .image-css{
        border-radius: 10px;
    }
</style>
