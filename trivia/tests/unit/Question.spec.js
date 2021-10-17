import { shallowMount } from '@vue/test-utils'
import Question from '@/components/Question.vue'

//@COMMENT: this test doesnt work
// describe('Question.vue', () => {
//   it('shows next button when question is answered', () => {
//     const isAnswered = true
//     const wrapper = shallowMount(Question, {
//       setProps: {
//         isAnswered,
//       },
//     })
//     console.log(wrapper.html())
//     expect(wrapper.find('button').text()).toBe('Next')
//   })
// })
