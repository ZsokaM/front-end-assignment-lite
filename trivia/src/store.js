import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    difficulties: ['easy', 'medium', 'hard'],
    currentDiff: 'easy',
    questions: [],
    isOver: false,
    round: 0,
    score: {
      history: [],
      total: 0,
    },
    currentView: 'home',
  },

  mutations: {
    isOver: (state) => {
      if (state.round === 9) {
        state.isOver = true
      }
    },

    nextQuestion: (state) => {
      state.round++
    },

    newGame: (state) => {
      state.isOver = false
      state.questions = []
      state.round = 0
      state.currentView = 'home'
    },

    setScore: (state, payload) => {
      if (payload.true) {
        state.score.history.push({
          correct: true,
          wrong: false,
        })
        state.score.total++
      } else {
        state.score.history.push({
          correct: false,
          wrong: true,
        })
      }
    },

    setCurrentDiff: (state, payload) => {
      state.currentDiff = payload
    },

    startQuiz: (state, payload) => {
      state.questions = payload
      console.log(state.questions)
      //state.currentView = 'quiz'
    },
  },

  actions: {
    startQuiz(context) {
      let api =
        'https://opentdb.com/api.php?amount=10&difficulty=' +
        context.state.currentDiff

      Vue.http
        .get(api)
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          context.commit('startQuiz', data.results)
        })
    },
  },
})
