<template>
  <main :class="$style.home">
    <section :class="$style.container">
      <h1 :class="$style['trivia-title']">Homerun Trivia</h1>
      <component :is="currentView" />
    </section>
  </main>
</template>

<script>
import Start from '../components/Start.vue'
import Quiz from '../components/Quiz.vue'

export default {
  name: 'home',
  components: {
    Start,
    Quiz,
  },
  computed: {
    currentView() {
      return this.$store.state.currentView
    },
  },
}
</script>

<style module>
.home {
  height: 100%;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
.container {
  height: 100%;
  width: 100%;
  border-radius: 5px;
  box-shadow: 5px 10px 15px darkslateblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  padding: 2rem;
  background-color: white;
}
.trivia-title {
  font-size: 4rem;
  font-weight: bold;
  color: darkslateblue;
}
</style>
