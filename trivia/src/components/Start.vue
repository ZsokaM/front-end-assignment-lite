<template>
  <div :class="$style['start-container']">
    <Instructions />
    <select
      :class="$style['start-container__dropdown']"
      @change="setCurrentDiff"
    >
      <option v-for="(diff, idx) in difficulties" :key="idx">{{ diff }}</option>
    </select>
    <button @click="startQuiz">Start</button>
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

<style module lang="scss">
.start-container {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  font-size: 1.25rem;

  &__dropdown {
    max-width: 200px;
    width: 100%;
    margin: 2rem auto;
    border: 1px solid darkslateblue;
    border-radius: 25px;
    padding: 0.75rem;
    cursor: pointer;
    text-align: center;
    color: darkslateblue;
    font-size: 1rem;
  }
}
</style>
