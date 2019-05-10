const expect = chai.expect
import Vue from 'vue/dist/vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('存在', () => {
    expect(Row).to.exist
  })
  it('接收gutter属性', (done) => {
    Vue.component('n-row', Row)
    Vue.component('n-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <n-row gutter="20">
        <n-col span="12"></n-col>
        <n-col span="12"></n-col>
      </n-row>
    `
    const vm = new Vue({
      el: div
    })
    setTimeout(function() {
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingRight).to.eq('10px')
      done()
      vm.$el.remove()
      vm.$destroy()
    })
  })
})
