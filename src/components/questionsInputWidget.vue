<template>
  <div class="q-div">
      <div class="q-div-post-top">
        <label for="q-div-img">
          <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png" class="q-image-upload-icon-css">
        </label>
        <input type="file" class="q-div-img" accept="image/*" @change="previewImage">
      </div>
      <div class="q-div-image-preview" v-if="imageData.length > 0">
        <img :src="imageData" class="q-div-preview-img">
      </div>
      <div class="q-div-parent">
        <textarea class="q-div-input" v-model="questionText" placeholder="Ask your question here.">
        </textarea>
      </div>
      <div class="q-div-post">
          <button class="q-div-post-btn" @click="onSubmit">Post</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'questionsInputWidget',
  data () {
    return {
      imageData: '',
      questionText: ''
    }
  },
  methods: {
    previewImage (event) {
      var input = event.target
      if (input.files && input.files[0]) {
        var reader = new FileReader()
        reader.onload = (e) => {
          this.imageData = e.target.result
        }
        reader.readAsDataURL(input.files[0])
      }
    },
    onSubmit () {
      console.log(this.imageData)
      console.log(this.questionText)
    }
  }
}
</script>

<style>
    *{
      outline: none;
    }
    .q-div{
        width: 100%
    }
    .q-div-parent{
        width: 100%
    }
    .q-div-input{
      width: calc(100% - 20px);
      min-height: 100px;
      border: 1px solid lightgray;
      padding: 10px;
      margin-left: 10px;
      margin-right: 10px;
    }
    .q-div-post{
      border: 1px solid lightgray;
      border-top: 0px;
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: 10px;
    }
    .q-div-post-top{
      border: 1px solid lightgray;
      margin-left: 10px;
      margin-right: 10px;
    }
    .q-div-post-btn{
      margin-top: 10px;
      padding-left: 10px;
      padding-right: 10px;
      appearance: none;
      border: 1px solid #4ca7ff;
      background: white;
      border-radius: 5px;
      margin-bottom: 10px;
      margin-left: 10px;
      color: #4ca7ff;
      cursor: pointer;
    }
    .q-div-post-btn:focus{
      outline: none;
    }
    .q-div-post-btn:hover{
      background-color: #4ca7ff;
      color: white;
    }
    .q-image-upload-icon-css{
      width: 18px;
      height: 20px;
      margin-top: 8px;
      margin-left: 10px;
      cursor: pointer;
    }
    .q-div-preview-img{
      width: 100px;
      height: 100px;
      margin: 20px;
    }
    .q-div-img{
      appearance: none;
      margin: 5px;
      cursor: pointer;
    }
</style>
