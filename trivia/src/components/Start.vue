<template>
  <div style="border: 1px solid white;">
    <Instructions></Instructions>
    <select @change="setCurrentDiff">
      <option v-for="(diff, idx) in difficulties" :key="idx">{{ diff }}</option>
    </select>
    <br />
    <br />
    <button @click="startQuiz">Start Quiz</button>
  </div>
</template>

<script>
import Instructions from './Instructions.vue'

export default {
  components: {
    Instructions,
  },

  computed: {
    difficulties() {
      return this.$store.state.difficulties
    },
    currentDiff() {
      return this.$store.state.currentDiff
    },
  },
  methods: {
    setCurrentDiff(event) {
      this.$store.commit('setCurrentDiff', event.target.value)
    },
    startQuiz() {
      this.$store.dispatch('startQuiz')
    },
  },
}
</script>

<style module></style>
