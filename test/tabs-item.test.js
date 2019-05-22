const expect = chai.expect
import Vue from 'vue/dist/vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head.vue'
import TabsBody from '../src/tabs-body.vue'
import TabsPane from '../src/tabs-pane.vue'
import TabsItem from '../src/tabs-item.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {
  it('tabs-item 存在', () => {
    expect(TabsItem).to.exist
  })
  
  it('接受 name 属性', ()=>{
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'xxx',
    }
    }).$mount()
    expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
  })

  it('接受 disabled 属性', ()=>{
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'xxx',
        disabled: true,
    }
    }).$mount()
    expect(vm.$el.classList.contains('disabled')).to.be.true
    const callback = sinon.fake()
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
  })
})
