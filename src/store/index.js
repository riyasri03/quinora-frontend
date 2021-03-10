import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    questionAnswerData: []
  },
  getters: {
    getQuestionAnswerData (state) {
      return state.questionAnswerData
    }
  },
  mutations: {
    setQuestionAnswerData (state, value) {
      state.questionAnswerData = value
    }
  },
  actions: {
    setQuestionRequestAction ({ commit, state }, object) {
      const axiosConfig = {
        method: 'post',
        baseURL: 'http://10.177.68.81:8080/',
        url: 'question/amandhaka/add',
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
            })
        })
        .catch(e => alert('Not Added'))
    },
    setAnswerRequestAction ({ commit, state }, object) {
      const axiosConfig = {
        method: 'post',
        baseURL: 'http://10.177.68.81:8080/',
        url: 'amandhaka/6',
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
        url: 'chaitanya/7'
      }
      axios(axiosConfig)
        .then((e) => {
          console.log(e.data)
          commit('setQuestionAnswerData', e.data)
          console.log(state.questionAnswerData)
        })
        .catch(e => console.log(e))
    },
    setAnswerCommentAction ({ commit, state }, object) {
      const axiosConfig = {
        method: 'post',
        baseURL: 'http://10.177.68.81:8080/',
        url: 'postComment/chaitanya',
        data: {
          answerId: object.answerId,
          text: object.text,
          date: new Date()
        }
      }
      axios(axiosConfig)
        .then((e) => console.log(e.data))
        .catch(e => console.log(e))
    }
  }
})
