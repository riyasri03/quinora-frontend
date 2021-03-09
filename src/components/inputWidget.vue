<template>
  <div>
      <div class="i-div-post-top">
        <label for="i-div-img">
          <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png" class="image-upload-icon-css">
        </label>
        <input type="file" class="i-div-img-input" id="i-div-img">
      </div>
      <div class="i-div-input" contenteditable="true">
          Add Content.
      </div>
      <div class="i-div-post">
          <button class="i-div-post-btn">Post</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'inputWidget'
}
</script>

<style>
    *{
        outline: none;
    }
    .i-div-input{
        min-height: 100px;
        border: 1px solid lightgray;
        padding: 10px;
        margin-left: 10px;
        margin-right: 10px;
    }
    .i-div-post{
        border: 1px solid lightgray;
        border-top: 0px;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .i-div-post-top{
        border: 1px solid lightgray;
        border-bottom: 0px;
        margin-left: 10px;
        margin-right: 10px;
    }
    .i-div-post-btn{
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
    .i-div-post-btn:focus{
      outline: none;
    }
    .i-div-post-btn:hover{
      background-color: #4ca7ff;
      color: white;
    }
    #i-div-img{
        display: none
    }
    .image-upload-icon-css{
        width: 18px;
        height: 20px;
        margin-top: 8px;
        margin-left: 10px;
        cursor: pointer;
    }
</style>
