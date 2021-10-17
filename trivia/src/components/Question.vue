<template>
  <article :class="$style.question">
    <p :class="$style['question__text']">{{ questions[round].question }}</p>
    <ul :class="$style['question__list']">
      <li
        v-for="(opt, idx) in options"
        :key="idx"
        @click="handleAnswer(opt)"
        :disabled="isAnswered"
        :class="[
          $style['question__options'],
          opt.classes.correct && $style.correct,
          opt.classes.incorrect && $style.incorrect,
        ]"
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
      this.$store.commit('colorAnswers')
      if (choice.type) {
        this.$store.commit('setScore', true)
      } else {
        this.$store.commit('setScore', false)
      }
      this.$store.commit('isOver')
    },

    nextQuestion() {
      this.$store.commit('setIsAnswered', false)
      if (this.round < 9) {
        this.$store.commit('nextQuestion')
      }
    },
  },
}
</script>

<style module lang="scss">
.question {
  border-radius: 3px;
  background-color: white;
  height: 100%;
  padding-bottom: 2rem;

  &__text {
    font-size: 1.5rem;
    padding: 1rem;
    background-color: darkslateblue;
    color: white;
  }

  &__list {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
  }

  &__options {
    list-style: none;
    background-color: rgb(191, 184, 235);
    color: darkslateblue;
    text-align: center;
    margin: 1rem auto;
    line-height: 60px;
    font-size: 1.5rem;
    width: 100%;
  }

  &__options:hover {
    background-color: pink;
  }
}

.correct {
  background-color: #59f159;
  border: 1px solid #59f159;
  color: white;
}

.incorrect {
  background-color: rgba(236, 118, 114, 0.664);
  border: 1px solid rgba(236, 118, 114, 0.664);
  color: white;
}
</style>
