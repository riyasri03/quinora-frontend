<template>
<div class="row">
  <div class="column side" style="background-color:white;"></div>
  <div class="column middle">
      <div >
          <i style="font-size: 100px;" class="fa fa-user-circle fa-10x"></i>
          <p>Write a description about yourself</p>
        </div>
        <br>
        <br>
      <div class="profileUnderline">
       <ul>
           <li><a>Profile</a></li>
           <li><a>Answer</a></li>
           <li> <a>Question </a></li>
           <li><a>Post</a></li>
       </ul>
  </div>
</div>
<div class="column leftside ">
    <h4>Credentials  and Highligths</h4>
    <div class="highligtUnderline">
        <br>
        <br>
        <div><i class="fa fa-briefcase" @click="AddEmploymentCredentials" ></i> Add employment credentials</div>
        <br>
         <div id="employmentDivision" v-show="credShow" class="credentials">
        <br>
         <p v-for="item in items" :key="item.message">
         <label for="Position"> Position </label>
         <input type="text" id="Position">
         <br>
         <br>
         <label for="Company"> Company/Organization </label>
         <input type="text" id="Company">
         <br>
         <br>
         <label for="Start Year"> Start Year </label>
         <select name="Year" id="Year">
         <option value="1999">1999</option>
         <option value="2000">2000</option>
         <option value="2001">2001</option>
         <option value="2002">2002</option>
         </select>
         <br>
         <br>
         <label for="End Year"> End Year </label>
         <select name="Year" id="Year">
         <option value="1999">1999</option>
         <option value="2000">2000</option>
         <option value="2001">2001</option>
         <option value="2002">2002</option>
         </select>
         <br>
         <br>
         </p>
         <button>Save</button>
         <button @click="AddEmployment">Add</button>
         <br>
        </div>
        <br>
        <div><i class="fa fa-graduation-cap" @click="AddEducationCredentials"></i> Add Education Credentials</div>
        <br>
        <div id="educationDivision" v-show="eduShow" class="credentials">
        <br>
         <p v-for="item in items1" :key="item.messsage">
         <label for="school"> School </label>
         <input type="text" id="school">
         <br>
         <br>
         <label for="primary"> Primary </label>
         <input type="text" id="primary">
         <br>
         <br>
         <label for="Start Year"> Graduation Year </label>
         <select name="Gyear" id="Gyear">
         <option value="2021">2021</option>
         <option value="2020">2020</option>
         <option value="2019">2019</option>
         <option value="2018">2018</option>
         </select>
         <br>
         <br>
         <label for="degree">Degree</label>
         <input type="text" id="degree">
         </p>
         <button>Save</button>
         <button @click="AddEducation">Add</button>
         <br>
        </div>
        <br>
    </div>
</div>
</div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      credShow: false,
      eduShow: false,
      locationShow: false,
      state: 0,
      state1: 0,
      state2: 0,
      items: [],
      items1: [],
      items2: []
    }
  },
  methods: {
    AddEmploymentCredentials () {
      this.credShow = true
      var x = document.getElementById('employmentDivision')
      if (x.style.display === 'none') {
        x.style.display = 'block'
      } else {
        x.style.display = 'none'
      }
    },
    AddEducationCredentials () {
      this.eduShow = true
      var x = document.getElementById('educationDivision')
      if (x.style.display === 'none') {
        x.style.display = 'block'
      } else {
        x.style.display = 'none'
      }
    },
    AddLocationCredentials () {
      this.locationShow = true
      var x = document.getElementById('locationDivision')
      if (x.style.display === 'none') {
        x.style.display = 'block'
      } else {
        x.style.display = 'none'
      }
    },
    AddEmployment () {
      console.log('Clicked')
      this.state += 1
      this.items.push(this.state)
    },
    AddEducation () {
      this.state1 += 1
      this.items1.push(this.state1)
    },
    AddLocation () {
      this.state2 += 1
      this.items2.push(this.state2)
    }
  }
}
</script>

<style scoped>
.column {
  float: left;
  padding: 10px;
  height: 300px;
}
.column.side {
  width: 15%;
}
.column.middle {
    margin-top: 100px;
  width: 50%;
  background-color: whitesmoke;
}
.column.leftside {
  margin-top: 100px;
  width: 25%;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.profileUnderline {
    border-top: 1px solid black;
    border-bottom: 1px solid black ;
}
.highligtUnderline {
    border-top: 1px solid black;
}
button {
    opacity:0.4;
}
ul {
  list-style-type: none;
  margin: 2px;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}
li a {
  display: block;
  color:black;
  text-align: center;
  padding: 10px 10px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color:white;
  cursor: pointer;
}
.credentials {
    box-sizing: border-box;
    background-color: whitesmoke;
}
</style>
