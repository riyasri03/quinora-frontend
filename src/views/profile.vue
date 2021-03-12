<template>
  <div>
    <table class="profile-table-css" cellpadding="30px">
      <tr>
        <td class="left-col-css">
          <div class="column middle">
            <table class="in-between">
              <tr>
                <td rowspan="4"><img class="profileImage" id="image" src="../assets/userprofile2.png" alt="imagehere"></td>
                <td>
                  <span class='place-username'>{{ username.substring(0,1).toUpperCase() + '' + username.substring(1,username.length) }}</span>
                  <input  type="file" @click="upload" id="picture" name="picture">
                </td>
              </tr>
            </table>
            <p v-if="bio.length === 0">Write a description about yourself</p>
            <p v-else><b>Bio:</b> {{ bio }}</p>
            <div class="profileUnderline">
              <ul>
                <li><a @click="profile">Profile</a></li>
                <li><a>Answer</a></li>
                <li> <a>Question </a></li>
                <li><a>Post</a></li>
              </ul>
            </div>
            <span class="Profile" v-show="profileShow" id="profile">
              <label for="firstName">First Name</label>
              <input class="common-input-text-css" type="text" v-model="firstName" id="firstName">
              <label for="lastName">Last Name  </label>
              <input class="common-input-text-css" type="text" v-model="lastName" id="lastName">
              <label for="profession">Profession  </label>
              <input class="common-input-text-css" type="text" v-model="profession" id="profession">
              <label for="city">City   </label><br>
              <input type="text" v-model="city" id="city" class="common-input-text-css">
              <label for="stateAddress">State  </label>
              <input type="text" v-model="stateAddress" id="stateAddress" class="common-input-text-css">
              <label for="country">Country </label>
              <input type="text" v-model="country" id="country" class="common-input-text-css">
              <label for="bio">Bio </label>
              <textarea v-model="bio" id="bio" name="bio" rows="4" cols="40" class="common-input-text-css">
              </textarea>
              <button class="btn-common-css" @click="postData">Save Profile</button>
            </span>
          </div>
        </td>
        <td class="right-col-css">
          <h4>Credentials and Highlights</h4>
          <div class="highligtUnderline">
            <div class='do-something-css'><i class="fa fa-briefcase">  Add employment credentials</i></div>
            <div class="credentials">
              <div v-for="item in itemCountEmployment" :key="item.id">
                <label for="Position"> Position </label>
                <input v-model="position" type="text" id="Position" class="common-input-text-css">
                <label for="Company"> Company/Organization </label>
                <input v-model="organization" type="text" id="company" class="common-input-text-css">
                <label for="Start Year"> Start Year </label>
                <select v-model="startYear" name="Year" id="startYear" class="common-input-text-css">
                  <option value="">Select Year</option>
                  <option value="1999">1999</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                </select>
                <label for="end Year"> End Year </label>
                <select v-model="endYear" name="Year" id="endYear" class="common-input-text-css">
                  <option value="">Select Year</option>
                  <option value="1999">1999</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                </select>
              </div>
              <button class="btn-common-css" @click="addEmploymentField()">Save Employment</button>
            </div>
            <div><i class="fa fa-graduation-cap anything-at-all-css">  Add Education Credentials</i></div>
            <div id="educationDivision" class="credentials">
              <div v-for="item in itemCountEducation" :key="item">
                <label for="school"> School </label>
                <input v-model="school" type="text" id="school" class="common-input-text-css">
                <label for="primary"> Primary </label>
                <input v-model="primaryDetail" type="text" id="primary" class="common-input-text-css">
                <label for="Start Year"> Graduation Year </label>
                <select v-model="graduationYear" name="Gyear" id="Gyear" class="common-input-text-css">
                  <option value="">Select Year</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                </select>
                <label for="degree">Degree</label>
                <input v-model="degree" type="text" id="degree" class="common-input-text-css">
              </div>
              <button class="btn-common-css" @click="addEducationField()">Save Education</button>
            </div>
          </div>
          <button class="btn-common-css" @click="postData()">Add</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'profile',
  data () {
    return {
      username: localStorage.getItem('username'),
      credShow: false,
      eduShow: false,
      locationShow: false,
      profileShow: false,
      itemCountEmployment: 1,
      itemCountEducation: 1,
      firstName: '',
      lastName: '',
      profession: '',
      country: '',
      city: '',
      stateAddress: '',
      bio: '',
      profileImage: '',
      school: '',
      primaryDetail: '',
      graduationYear: '',
      organization: '',
      degree: '',
      position: '',
      startYear: '',
      endYear: '',
      educationList: [],
      employmentList: [],
      education: {
        school: '',
        primaryDetail: '',
        graduationyear: '',
        degree: ''
      },
      employment: {
        position: '',
        organization: '',
        endYear: '',
        startYear: ''
      },
      arr: ['../assets/platinum.jpeg', '../assets/badge.jpeg', '../assets/silver.jpeg', '../assets/bronze.jpeg'],
      badge: 2
    }
  },
  methods: {
    addEducationField () {
      this.education.school = this.school
      this.education.primaryDetail = this.primaryDetail
      this.education.graduationYear = this.graduationYear
      this.education.degree = this.degree
      this.educationList.push(this.education)
      console.log(this.educationList)
      this.education = {
        school: '',
        primaryDetail: '',
        graduationyear: '',
        degree: ''
      }
      this.school = ''
      this.primaryDetail = ''
      this.graduationYear = ''
      this.degree = ''
    },
    addEmploymentField () {
      this.employment.organization = this.organization
      this.employment.endYear = this.endYear
      this.employment.startYear = this.startYear
      this.employment.position = this.position
      this.employmentList.push(this.employment)
      console.log(this.employmentList)
      this.employment = {
        position: '',
        organization: '',
        endYear: '',
        startYear: ''
      }
      this.position = ''
      this.organization = ''
      this.endYear = ''
      this.startYear = ''
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
        this.profileImage = imgElement.src
        console.log(imgElement.src)
      })
    },
    postData () {
      console.log(this.firstName)
      this.obj = {
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        profession: this.profession,
        city: this.city,
        country: this.country,
        state: this.stateAddress,
        bio: this.bio,
        profileImage: this.profileImage,
        employment: this.employmentList,
        education: this.educationList
      }
      axios.put('http://10.177.68.116:8081/user/updateUser/' + localStorage.getItem('username'), this.obj).then((result) => {
        console.log(result)
      })
    }
  }
}
</script>

<style scoped>
.row{
  margin-left: 300px;
}
.column.middle {
  background-color: whitesmoke;
  padding: 20px;
  border-radius: 10px;
  width: 100%
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
    margin-bottom: 10px;
}
.highligtUnderline {
    border-top: 1px solid black;
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
  padding: 20px;
  border-radius: 10px
}
.credentials {
  box-sizing: border-box;
  background-color: whitesmoke;
  padding: 20px;
  padding-bottom: 0px;
  border-radius: 10px;
}
.profileImage {
border-radius: 50%;
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
.btn-common-css {
  border: 1px solid black;
  margin-bottom: 20px;
  padding: 5px;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}
button:hover {
  color:  blue;
}
.dot {
  height: 25px;
  width: 25px;
  margin-bottom:100px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
.dot.gold {
  background-color: #FFD700;
}
.dot.platinum {
  background-color:brown;
}
.dot.silver {
  background-color:silver;
}
.dot.bronze {
  background-color:#CD7F32;
}
.common-input-text-css{
  display: block;
  padding: 5px;
  margin-bottom: 10px;
}
.left-col-css{
  width: 60%
}
.right-col-css{
  width: 40%
}
table td, table td * {
  vertical-align: top;
}
.profile-table-css{
  margin-top: 100px;
  width: 100%;
  padding-left:100px;
  padding-right: 100px;
}
*{
  outline: none;
}
#picture{
  margin-top: 50px;
}
.do-something-css{
  margin-bottom: 10px;
  margin-top: 10px;
}
.anything-at-all-css{
  margin-top: 40px;
  margin-bottom: 15px;
}
.place-username{
  font-size: 20px;
  display: block;
  margin-top: 15px;
  font-weight: bold
}
.in-between{
  margin-bottom: 30px;
}
</style>
