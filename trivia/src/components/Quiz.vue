<template>
  <div>
    <question-meter></question-meter>
    <score></score>
    <question></question>
  </div>
</template>

<script>
import Question from './Question.vue'
import Score from './Score.vue'
import QuestionMeter from './QuestionMeter.vue'

export default {
  data() {
    return {}
  },
  components: {
    Question,
    Score,
    QuestionMeter,
  },
  methods: {},
  created() {},
}
</script>

<style lang="scss"></style>
