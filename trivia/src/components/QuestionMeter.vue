<template>
  <div>
    <p>You are at question {{ round }} out of 10</p>
  </div>
</template>

<script>
export default {
  computed: {
    round() {
      return this.$store.state.round
    },
  },
}
</script>
