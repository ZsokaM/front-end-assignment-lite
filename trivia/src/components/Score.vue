<template>
  <div v-if="isOver">
    <p :class="$style.resultMsg">Correct answers: {{ score.total }} / 10</p>
  </div>
</template>

<script>
export default {
  computed: {
    score() {
      return this.$store.state.score
    },
    isOver() {
      return this.$store.state.isOver
    },
  },
}
</script>

<style module lang="scss">
.resultMsg {
  color: dodgerblue;
  font-size: 2rem;
}
</style>
