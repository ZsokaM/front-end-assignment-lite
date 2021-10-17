<template>
  <main class="home">
    <section class="container">
      <h1>Homerun Trivia</h1>
      <component :is="currentView"></component>
    </section>
  </main>
</template>

<script>
import Start from '../components/Start.vue'
import Quiz from '../components/Quiz.vue'

export default {
  name: 'home',
  data() {
    return {}
  },
  components: {
    Start,
    Quiz,
  },
  computed: {
    currentView() {
      return this.$store.state.currentView
    },
  },
  methods: {},
  created() {},
}
</script>

<style lang="scss">
.home {
  height: 100%;
  margin: 2rem auto;
}
.container {
  background-color: #ccc;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  box-shadow: 5px 10px 15px darkslateblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  padding: 2rem;
}
h1 {
  font-size: 4rem;
  font-weight: bold;
  color: darkslateblue;
}
p {
  color: darkslateblue;
}
</style>
