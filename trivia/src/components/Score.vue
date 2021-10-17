<template>
  <div>
    <p>Correct answers: {{ score.total }} / 10</p>
  </div>
</template>

<script>
export default {
  computed: {
    score() {
      return this.$store.state.score
    },
  },
}
</script>
