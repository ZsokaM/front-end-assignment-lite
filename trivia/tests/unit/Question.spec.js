import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Question from '@/components/Question.vue'

//@COMMENT: this test doesnt work
const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isAnswered: true,
    round: 0,
    questions: [{
      options: null
    }]
  },
})

describe('Question.vue', () => {
  it('shows next button when question is answered', () => {
    const wrapper = shallowMount(Question, {
      store,
      localVue,
    })
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})
