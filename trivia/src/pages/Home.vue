<template>
  <main class="home">
    <section class="container">
      <h1>Homerun Trivia</h1>
      <start></start>
    </section>
  </main>
</template>

<script>
import Start from '../components/Start.vue'

export default {
  name: 'home',
  data() {
    return {}
  },
  components: {
    Start,
  },
  methods: {},
  created() {},
}
</script>

<style lang="scss">
.home {
  margin: 1rem;
  padding: 2rem;
}
.container {
  background-color: darkslateblue;
  height: 500px;
  border-radius: 5px;
  box-shadow: 10px 15px 20px #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
}
h1 {
  font-size: 4rem;
  font-weight: bold;
  color: white;
}
p {
  color: white;
}
</style>
