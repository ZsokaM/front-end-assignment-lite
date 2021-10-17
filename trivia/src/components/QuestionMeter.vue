<template>
  <div v-if="!isOver">
    <p :class="$style['score-style']">Question {{ round + 1 }} out of 10</p>
  </div>
</template>

<script>
export default {
  computed: {
    round() {
      return this.$store.state.round
    },
    isOver() {
      return this.$store.state.isOver
    },
  },
}
</script>

<style module lang="scss">
.score-style {
  color: dodgerblue;
  font-size: 1.5rem;
}
</style>
