import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    questionAnswerData: [],
    allQuestions: [],
    particularQuestion: {}
  },
  getters: {
    getQuestionAnswerData (state) {
      return state.questionAnswerData
    },
    getAllQuestions (state) {
      return state.allQuestions
    },
    getParticularQuestion (state) {
      return state.particularQuestion
    }
  },
  mutations: {
    setQuestionAnswerData (state, value) {
      state.questionAnswerData = value
    },
    setAllQuestions (state, value) {
      state.allQuestions = value
    },
    setParticularQuestion (state, value) {
      state.particularQuestion = value
    }
  },
  actions: {
    setQuestionRequestAction ({ commit, state }, object) {
      const axiosConfig = {
        method: 'post',
        baseURL: 'http://10.177.68.81:8080/',
        url: `question/${localStorage.getItem('username')}/add`,
        data: {
          category: object.category,
          questionTitle: object.questionTitle,
          questionText: object.questionText,
          createdAt: new Date(),
          status: true
        }
      }
      axios(axiosConfig)
        .then((e) => {
          const axiosConfigRe = {
            method: 'post',
            baseURL: 'http://10.177.68.73:8080/',
            url: '/multimedia/imageQuestion',
            data: {
              images: [object.imageData],
              question_ID: e.data.questionId
            }
          }
          axios(axiosConfigRe)
            .then((e) => {
              console.log(e.data)
              alert('Question Posted')
            })
        })
        .catch(e => alert('Not Added'))
    },
    setAnswerRequestAction ({ commit, state }, object) {
      const axiosConfig = {
        method: 'post',
        baseURL: 'http://10.177.68.81:8080/',
        url: `${localStorage.getItem('username')}/${object.questionId}`,
        data: {
          answerText: object.answerText,
          imgsrc: object.imageData
        }
      }
      axios(axiosConfig)
        .then((e) => {
          console.log(e.data)
        })
        .catch(e => alert('Answer Not Posted'))
    },
    setQuestionAnswerRequestDataAction ({ commit, state }, object) {
      const axiosConfig = {
        method: 'get',
        baseURL: 'http://10.177.68.81:8080/',
        url: `${localStorage.getItem('username')}/${object}`
      }
      console.log(object)
      axios(axiosConfig)
        .then((e) => {
          console.log(e.data)
          commit('setQuestionAnswerData', e.data)
          console.log(state.questionAnswerData)
          localStorage.setItem('questionId', object)
          router.push('/questionAnswer')
        })
        .catch(e => console.log(e))
    },
    setAnswerCommentAction ({ commit, state }, object) {
      const axiosConfig = {
        method: 'post',
        baseURL: 'http://10.177.68.81:8080/',
        url: `postComment/${localStorage.getItem('username')}`,
        data: {
          answerId: object.answerId,
          text: object.text,
          date: new Date()
        }
      }
      axios(axiosConfig)
        .then((e) => console.log(e.data))
        .catch(e => console.log(e))
    },
    setSignUpAction ({ commit, state }, object) {
      const axiosConfig = {
        method: 'post',
        baseURL: 'http://10.177.68.110:808/',
        url: '/users/sign-up',
        data: {
          username: object.username,
          password: object.password
        }
      }
      axios(axiosConfig)
        .then((e) => {
          console.log(e.data)
          router.push('/categories')
        })
        .catch(e => console.log(e))
    },
    setLoginAction ({ commit, state }, object) {
      const axiosConfig = {
        method: 'post',
        baseURL: 'http://10.177.68.110:808/',
        url: '/login',
        data: {
          username: object.username,
          password: object.password
        }
      }
      axios(axiosConfig)
        .then((e) => {
          console.log(e.data)
          localStorage.setItem('sessionId', e.data.Authorization)
          router.push('/')
        })
        .catch(e => console.log(e))
    },
    setCategoriesAction ({ commit, state }, object) {
      const axiosConfig = {
        method: 'post',
        baseURL: 'http://10.177.68.116:8081/',
        url: '/user/save',
        data: {
          username: localStorage.getItem('username'),
          category: object
        }
      }
      axios(axiosConfig)
        .then((e) => {
          console.log(e.data)
          alert('Registeration Successful, Please Login Now')
          router.push('/login')
        })
        .catch(e => console.log(e))
    },
    setLikeAction ({ commit, state }, object) {
      const axiosConfig = {
        method: 'post',
        baseURL: 'http://10.177.68.81:8080/',
        url: `/reaction/${localStorage.getItem('username')}`,
        data: {
          answerId: object.answerId,
          liked: object.isLiked
        }
      }
      axios(axiosConfig)
        .then((e) => {
          console.log(e.data)
        })
        .catch(e => console.log(e))
    },
    setDislikeAction ({ commit, state }, object) {
      const axiosConfig = {
        method: 'post',
        baseURL: 'http://10.177.68.81:8080/',
        url: `/reaction/${localStorage.getItem('username')}`,
        data: {
          answerId: object.answerId,
          liked: object.isLiked
        }
      }
      axios(axiosConfig)
        .then((e) => {
          console.log(e.data)
        })
        .catch(e => console.log(e))
    },
    setGetAllQuestionsAction ({ commit, state }, object) {
      const axiosConfig = {
        method: 'get',
        baseURL: 'http://10.177.68.81:8080/',
        url: '/question/all'
      }
      axios(axiosConfig)
        .then((e) => {
          console.log(e.data)
          commit('setAllQuestions', e.data)
        })
        .catch(e => console.log(e))
    },
    setGetParticularQuestionAction ({ commit, state }, object) {
      const axiosConfig = {
        method: 'get',
        baseURL: 'http://10.177.68.81:8080/',
        url: `/question/question-id/${object}`
      }
      axios(axiosConfig)
        .then((e) => {
          console.log(e.data)
          commit('setParticularQuestion', e.data)
        })
        .catch(e => console.log(e))
    }
  }
})
