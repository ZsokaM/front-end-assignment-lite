<template>
  <div>
    <score />
    <question-meter />
    <div v-if="isOver">
      <button @click="newGame">New game</button>
    </div>
    <div v-else>
      <question />
    </div>
  </div>
</template>

<script>
import Question from './Question.vue'
import Score from './Score.vue'
import QuestionMeter from './QuestionMeter.vue'

export default {
  data() {
    return {}
  },
  components: {
    Question,
    Score,
    QuestionMeter,
  },
  computed: {
    isOver() {
      return this.$store.state.isOver
    },
  },
  methods: {
    newGame() {
      this.$store.commit('newGame')
    },
  },
}
</script>

<style lang="scss"></style>
