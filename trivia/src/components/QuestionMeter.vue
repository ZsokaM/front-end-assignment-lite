<template>
  <div v-if="!isOver">
    <p>You are at question {{ round + 1 }} out of 10</p>
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
