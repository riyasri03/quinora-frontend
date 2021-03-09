<template>
  <div class="container">
      <div class="inner-container">
        <div v-for="category in categories" :key="category.id" class="parent">
            <img :src="category.src" class="image-css">
            <button class="btn">{{ category.name }}</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      categories: [
        {
          name: 'Space',
          src: require('../assets/space.jpg')
        },
        {
          name: 'Technology',
          src: require('../assets/technology.jpg')
        },
        {
          name: 'Food',
          src: require('../assets/food.jpg')
        },
        {
          name: 'Games',
          src: require('../assets/games.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>
    *{
        outline: none;
    }
    .container{
        padding: 10px;
    }
    .btn{
        appearance: none;
        border-radius: 5px;
        border: 1px solid white;
        background: whitesmoke;
        cursor: pointer;
    }
    .inner-container{
        float: right
    }
    .btn:hover{
        box-shadow: 0 0 40px 5px black;
    }
    .image-css{
        vertical-align: middle;
        margin-bottom: 10px;
        margin-right: 5px;
        width: 30px;
        height: 30px;
        border-radius: 5px;
    }
</style>
