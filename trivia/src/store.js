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
    currentView: 'start',
    isAnswered: false,
  },

  mutations: {
    isOver: (state) => {
      if (state.round === 9) {
        state.isOver = true
        state.isAnswered = false
      }
    },

    nextQuestion: (state) => {
      state.round++
    },

    newGame: (state) => {
      state.isOver = false
      state.questions = []
      state.round = 0
      state.isAnswered = false
      state.currentView = 'start'
    },

    setIsAnswered: (state, payload) => {
      state.isAnswered = payload
    },
    setScore: (state, payload) => {
      if (payload) {
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
      state.questions.forEach((q) => {
        q.options = q.incorrect_answers.reduce((accum, curr) => {
          accum.push({
            text: curr,
            type: false,
            classes: {
              incorrect: false,
            },
          })
          return accum
        }, [])

        q.options.push({
          text: q.correct_answer,
          type: true,
          classes: {
            correct: false,
          },
        })
      })
      state.currentView = 'quiz'
    },

    styleButtons: (state) => {
      state.questions[state.round].options.forEach((opt) => {
        if (opt.type) {
          opt.classes = { correct: true }
        } else {
          opt.classes = { incorrect: true }
        }
      })
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

  getters: {
    round: (state) => {
      return state.round
    },
  },
})
