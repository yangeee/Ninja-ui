const expect = chai.expect
import Vue from 'vue/dist/vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head.vue'
import TabsBody from '../src/tabs-body.vue'
import TabsPane from '../src/tabs-pane.vue'
import TabsItem from '../src/tabs-item.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('Tabs 存在', () => {
    expect(Tabs).to.exist
  })
  it('接受 selected 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <n-tabs selected="finance">
      <n-tabs-head >
        <n-tabs-item name="woman"> 美女 </n-tabs-item>
        <n-tabs-item name="finance"> 财经 </n-tabs-item>
        <n-tabs-item name="sports"> 体育 </n-tabs-item>
      </n-tabs-head>
      <n-tabs-body>
        <n-tabs-pane name="woman"> 美女相关资讯 </n-tabs-pane>
        <n-tabs-pane name="finance"> 财经相关资讯 </n-tabs-pane>
        <n-tabs-pane name="sports"> 体育相关资讯 </n-tabs-pane>
      </n-tabs-body>
    </n-tabs>
    `
    let vm = new Vue({
      el: div,
      components: {
        'n-tabs': Tabs,
        'n-tabs-head': TabsHead,
        'n-tabs-body': TabsBody,
        'n-tabs-item': TabsItem,
        'n-tabs-pane': TabsPane,
    
      }
    })
    let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
    expect(x.classList.contains('item_active')).to.be.true
    
  })

  it('接受 selected prop', () => {})
})
