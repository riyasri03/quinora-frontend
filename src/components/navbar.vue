<template>
  <div class = "nav">
      <ul>
          <img style="margin-right:20px;" id = "logo" src="../assets/image.jpg"/>
          <li><router-link to="/"><img src="../assets/home (1).png"/></router-link></li>
          <li><img src="../assets/newspaper.png"/></li>
          <li><img src="../assets/browser.png"/></li>
          <li><img src="../assets/users.png"/></li>
          <li><img src="../assets/alarm.png"/></li>
      </ul>
      <select name="filter" id="filter">
          <option value="">Filter 1</option>
          <option value="">Filter 2</option>
          <option value="">Filter 3</option>
          <option value="">Filter 4</option>
      </select>
      <input type="text" :name="searchTerm" placeholder="Search...">
      <button type="submit" @click="onSearch" id="searchButton">Search</button>
      <img src="../assets/user.png" id="profile">
      <img src="../assets/more.png" id="more" @click="onClickMenu()" alt="asda">
  </div>
</template>
<script>
export default {
  methods: {
    onClickMenu () {
      alert('sad')
    }
  }
}
</script>
<style scoped>
    input[type=text] {
        width:350px;
        position: absolute;
        padding: 6px;
        border: none;
        margin-top: 10px;
        margin-bottom: 5px;
        border:2px solid #F1F2F2;
        left:40%;
        border-radius: 20px;
    }
    #searchButton {
        position: absolute;
        left: 65%;
        margin-top:12px;
        margin-bottom:5px;
        padding: 5px;
        border:none;
        background-color:#ce4745;
        width: 70px;
        border-radius: 30px;
        cursor: pointer;
        color:white;
    }
    #filter {
        position: absolute;
        left:33%;
        margin-top:12px;
        margin-bottom:5px;
        padding: 4px 10px;
        border:1px solid #F1F2F2;
        border-radius: 20px;
        cursor: pointer;
    }
    .nav {
        background-color: #FFFFFF;
        box-shadow: 0 8px 6px -6px #999;
        top: 0px;
        height: 60px;
        position: fixed;
        width: 100vw;
        display: flex;
        flex-direction: row;
    }
    #logo {
        width: 100px;
        height: 50px;
        padding:12px;
        margin-top: 5px;
    }
    #profile {
        width:30px;
        height:25px;
        position: absolute;
        right:10%;
        margin-top:14px;
    }
    #more {
        width:30px;
        height:25px;
        position: absolute;
        right:7%;
        cursor: pointer;
        margin-top:14px;
    }
    ul {
        width: 400px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    li {
        display: block;
        padding: 10px;
        color:#808080;
    }
    li:hover {
        background-color:#F1F2F2 ;
    }
    li {
        cursor: pointer;
    }
    img {
        width:30px;
        height: 25px;
    }
</style>
