<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    this.$http
      .get('https://opentdb.com/api_token.php?command=request')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        this.$store.state.sessionToken = data.token
      })
  },
}
</script>
