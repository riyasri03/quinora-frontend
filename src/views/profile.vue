<template>
<div class="row">
  <div class="column side" style="background-color:white;"></div>
  <div class="column middle">
      <div >
           <img class="profileImage" id="image" src="../assets/userprofile2.png" alt="imagehere">
           <input  type="file" @click="upload" id="picture" name="picture">
          <p>Write a description about yourself</p>
        </div>
        <br>
        <br>
      <div class="profileUnderline">
       <ul>
           <li><a @click="profile">Profile</a></li>
           <li><a>Answer</a></li>
           <li> <a>Question </a></li>
           <li><a>Post</a></li>
       </ul>
  </div>
  <br>
  <br>
  <span class="Profile" v-show="profileShow" id="profile">
    <label for="firstName">First Name   </label><br>
    <br>
    <input class="text" type="text" v-model="firstName" id="firstName">
    <br>
    <br>
    <label for="lastName">Last Name  </label><br>
    <br>
    <input class="text" type="text" v-model="lastName" id="lastName">
    <br>
    <br>
    <label for="username">Username   </label><br>
    <br>
    <input class="text" type="text" v-model="username" id="username">
    <br>
    <br>
    <label for="profileCredential">Profile Credential   </label><br>
    <br>
    <input class="text" type="text" v-model="profileCredential" id="profileCredential">
    <br>
    <br>
    <label for="address">Address   </label><br>
    <br>
    <input class="text" type="text" v-model="address" id="address">
    <br>
    <br>
    <label for="bio">Bio    </label><br>
    <br>
    <input class="text" type="text" v-model="bio" id="bio">
    <br>
    <br>
    <button class="saveProfile" @click="saveProfile">Save Profile</button>
  </span>
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
         <input v-model="position" type="text" id="Position">
         <br>
         <br>
         <label for="Company"> Company/Organization </label>
         <input v-model="organization" type="text" id="Company">
         <br>
         <br>
         <label for="Start Year"> Start Year </label>
         <select v-model="startYear" name="Year" id="Year">
         <option value="1999">1999</option>
         <option value="2000">2000</option>
         <option value="2001">2001</option>
         <option value="2002">2002</option>
         </select>
         <br>
         <br>
         <label for="end Year"> End Year </label>
         <select v-model="endYear" name="Year" id="Year">
         <option value="1999">1999</option>
         <option value="2000">2000</option>
         <option value="2001">2001</option>
         <option value="2002">2002</option>
         </select>
         <br>
         <br>
         </p>
         <button @click="saveEmployment">Save Employment</button>
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
         <input v-model="school" type="text" id="school">
         <br>
         <br>
         <label for="primary"> Primary </label>
         <input v-model="primaryDetail" type="text" id="primary">
         <br>
         <br>
         <label for="Start Year"> Graduation Year </label>
         <select v-model="graduationYear" name="Gyear" id="Gyear">
         <option value="2021">2021</option>
         <option value="2020">2020</option>
         <option value="2019">2019</option>
         <option value="2018">2018</option>
         </select>
         <br>
         <br>
         <label for="degree">Degree</label>
         <input v-model="degree" type="text" id="degree">
         </p>
         <button @click="saveEducation">Save Education</button>
         <button @click="AddEducation">Add</button>
         <br>
         <button @click="postData">Save</button>
        </div>
        <br>
    </div>
</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'profile',
  data () {
    return {
      credShow: false,
      eduShow: false,
      locationShow: false,
      profileShow: false,
      state: 0,
      state1: 0,
      state2: 0,
      items: [],
      items1: [],
      items2: [],
      firstName: '',
      lastName: '',
      username: '',
      profileCredential: '',
      address: '',
      bio: '',
      profileImage: '',
      position: '',
      organization: '',
      startYear: '',
      endYear: '',
      school: '',
      primaryDetail: '',
      graduationYear: '',
      degree: '',
      obj: {},
      obj2: [],
      obj3: [],
      obj4: {}
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
      this.position = ''
      this.organization = ''
      this.startYear = ''
      this.endYear = ''
    },
    AddEducation () {
      this.state1 += 1
      this.school = ''
      this.primaryDetail = ''
      this.graduationYear = ''
      this.degree = ''
      this.items1.push(this.state1)
    },
    AddLocation () {
      this.state2 += 1
      this.items2.push(this.state2)
    },
    saveProfile () {
      console.log(this.firstName)
      console.log(this.lastName)
      console.log(this.username)
      console.log(this.profileCredential)
      console.log(this.address)
      console.log(this.bio)
      console.log(this.profileImage)
    },
    saveEmployment () {
      this.obj2.push({
        position: this.position,
        organization: this.organization,
        startYear: this.startYear,
        endYear: this.endYear
      })
      console.log(this.obj2)
    },
    saveEducation () {
      this.obj3.push({
        school: this.school,
        primarydetail: this.primaryDetail,
        graduationYear: this.graduationYear,
        degree: this.degree
      })
      console.log(this.obj3)
    },
    profile () {
      this.profileShow = false
      var x = document.getElementById('profile')
      if (x.style.display === 'none') {
        x.style.display = 'block'
      } else {
        x.style.display = 'none'
      }
    },
    upload () {
      var inputElement = document.querySelector('input')
      var imgElement = document.querySelector('img')
      inputElement.addEventListener('change', function () {
        var url = URL.createObjectURL(inputElement.files[0])
        imgElement.src = url
        console.log(imgElement.src)
      })
    },
    postData () {
      console.log(this.firstName)
      /* this.obj = {
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        profileCredential: this.profileCredential,
        address: this.address,
        bio: this.bio,
        profileImage: '',
        obj2: [
          {
            position: this.position,
            organization: this.organization,
            startYear: this.startYear,
            endYear: this.endYear
          }],
        obj3: [{
          school: this.school,
          primarydetail: this.primaryDetail,
          graduationYear: this.graduationYear,
          degree: this.degree
        }]
      } */
      this.obj = {
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        profileCredential: this.profileCredential,
        address: this.address,
        bio: this.bio,
        obj2: this.obj2,
        obj3: this.obj3
      }
      console.log(this.obj)
      axios.post('http://10.177.68.116:8081/user/save', this.obj).then((result) => {
        console.log(result)
      })
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
.profileImage {
border-radius: 400px;
height: 150px;
width:  150px;
}
.text {
  width: 200px;
  float: left;
}
.Profile {
  border:1px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-top: 40px;
  padding-left: 40px;
}
.saveProfile {
  border-radius: 100px;
  margin-bottom:30px;
  margin-left: 60px;
}
button {
  margin: 5px;
  border-radius: 100px;
}
button:hover {
  color:gray
}
</style>
