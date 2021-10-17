<template>
  <article class="question">
    <p class="question__text">{{ questions[round].question }}</p>
    <ul class="questions__list">
      <li
        class="question__options"
        v-for="(opt, idx) in options"
        :key="idx"
        @click="handleAnswer(opt)"
        :class="opt.classes"
      >
        {{ opt.text }}
      </li>
    </ul>
    <button v-if="isAnswered" @click="nextQuestion">Next</button>
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
    isAnswered() {
      return this.$store.state.isAnswered
    },
  },
  methods: {
    handleAnswer(choice) {
      this.$store.commit('setIsAnswered', true)
      this.$store.commit('styleButtons')
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
      this.$store.commit('setIsAnswered', false)
      if (this.round <= 9) {
        this.$store.commit('nextQuestion')
      }
    },
  },
}
</script>

<style lang="scss">
.question {
  border-radius: 3px;
  background-color: white;
  box-shadow: 0px 3px 3px rosybrown;
  height: 100%;

  &__text {
    font-size: 2rem;
    padding: 1rem;
  }

  &__list {
    display: flex;
    flex-direction: column;
  }
  &__options {
    list-style: none;
    background-color: rosybrown;
    text-align: center;
    margin: 1rem auto;
    line-height: 60px;
    font-size: 1.5rem;
  }
}

.correct {
  background-color: lightgreen;
  border: 1px solid lightgreen;
  color: white;
}

.incorrect {
  background-color: rgba(230, 75, 70, 0.664);
  border: 1px solid rgba(230, 75, 70, 0.664);
  color: white;
}
</style>
