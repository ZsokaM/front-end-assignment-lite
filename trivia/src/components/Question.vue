<template>
  <article>
    <p>{{ questions[round].question }}</p>
    <ul>
      <li v-for="(opt, idx) in options" :key="idx" @click="handleAnswer(opt)">
        {{ opt.text }}
      </li>
    </ul>
    <button @click="nextQuestion">Next</button>
  </article>
</template>

<script>
export default {
  computed: {
    round() {
      return this.$store.state.round
    },
    questions() {
      return this.$store.state.questions
    },
    options() {
      return this.questions[this.round].options
    },
  },
  methods: {
    handleAnswer(choice) {
      if (choice.type) {
        console.log('correct')
        this.$store.commit('setScore', true)
      } else {
        console.log('false')
        this.$store.commit('setScore', false)
      }
      this.$store.commit('isOver')
    },
    nextQuestion() {
      if (this.round < 9) {
        this.$store.commit('nextQuestion')
      }
    },
  },
}
</script>

<style module></style>
