<template>
  <div class="container">
      <div class="inner-container">
        <div v-for="category in getCategoryList" :key="category.id" class="parent">
          <img :src="category.src" class="image-css">
          <button class="btn" @click="categorySelect" :id="category.substring(0,1).toUpperCase() + '' + category.substring(1, category.length)" :value="category.substring(0,1).toUpperCase() + '' + category.substring(1, category.length)">{{ category.substring(0,1).toUpperCase() + '' + category.substring(1, category.length) }}</button>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'sidebar',
  data () {
    return {
      categoryList: localStorage.getItem('categoryList')
    }
  },
  methods: {
    categorySelect (event) {
      console.log(event.target.id)
      const obj = {
        category: event.target.id
      }
      this.$store.dispatch('setGetQuestionsByCategoryAction', obj)
    }
  },
  computed: {
    ...mapGetters(['getCategoryList'])
  },
  created () {
    this.$store.dispatch('setGetUserCategoriesAction', localStorage.getItem('username'))
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
        border-radius: 10px;
        width: fit-content;
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
        width: 50px;
        height: 50px;
        border-radius: 5px;
    }
</style>
