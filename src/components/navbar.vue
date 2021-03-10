<template>
  <div class = "nav">
      <ul>
          <img style="margin-right:20px;" id = "logo" src="../assets/image.jpg"/>
          <li><img src="../assets/house.png"/></li>
          <li><img src="../assets/news.png"/></li>
          <li><img src="../assets/notes.png"/></li>
          <li><img src="../assets/team.png"/></li>
          <li><img src="../assets/notification.png"/></li>
      </ul>
      <select name="filter" id="filter">
          <option value="">Filter 1</option>
          <option value="">Filter 2</option>
          <option value="">Filter 3</option>
          <option value="">Filter 4</option>
      </select>
      <input type="text" :name="searchTerm" placeholder="Search...">
      <button type="submit" @click="onSearch" id="searchButton">Search</button>
      <img src="../assets/profile.png" id="profile">
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

<style >
body {
    background-color: #e2e7e7;
    margin: 0  !important;
    padding: 0 !important;
}
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
    left: 67%;
    margin-top:10px;
    margin-bottom:5px;
    padding: 6px;
    border:none;
    background-color:#ce4745;
    width: 70px;
    height: 30px;
    border-radius: 30px;
    cursor: pointer;
    color:white;
}
#filter {
    position: absolute;
    left:33%;
    margin-top:10px;
    margin-bottom:5px;
    padding: 6px 9px;
    border:2px solid #F1F2F2;
    border-radius: 30px;
}
.nav {
  background-color: #FFFFFF;
  box-shadow: 0 8px 6px -6px #999;
  position: fixed;
  width: 100vw;
  display: flex;
  flex-direction: row;
}
#logo {
    width: 100px;
    height: 30px;
    padding:12px;
}
#profile {
    width:30px;
    height:25px;
    padding:10px 17px;
    position: absolute;
    right:10%;
}
#more {
    width:30px;
    height:25px;
    padding:10px 17px;
    position: absolute;
    right:7%;
    cursor: pointer;
}
.nav ul {
    margin:0;
    padding:0;
    display: flex;
    flex-direction: row;
}
.nav ul li {
    display: block;
    color:#808080;
}
.nav ul li :hover {
   background-color:#F1F2F2 ;
}
.nav ul li {
    cursor: pointer;
}

.nav ul li img {
    width:30px;
    height: 25px;
    padding:10px 17px;
}
</style>
