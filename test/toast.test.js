const expect = chai.expect
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在', () => {
    expect(Toast).to.exist
  })

  describe('prop', function() {
    it('接受 autoClose', done => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Construtor = Vue.extend(Toast)
      const vm = new Construtor({
        propsData: {
          autoClose: 1
        }
      }).$mount(div)
      setTimeout(() => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      }, 1500)
    })

    it('接受 closeButton', (done) => {
      const callback = sinon.fake()
      const Construtor = Vue.extend(Toast)
      const vm = new Construtor({
        propsData: {
          closeButton: {
            text: '关闭吧',
            callback
          }
        }
      }).$mount()
      let closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.eq('关闭吧')
      setTimeout(() => {
        closeButton.click()
        expect(callback).to.have.been.called
        done()
      }, 200)
    })

    it('接受 enableHtml', () => {
      const Construtor = Vue.extend(Toast)
      const vm = new Construtor({
        propsData: {
          enableHtml: true
        }
      })
      vm.$slots.default = ['<strong id="test">hi</strong>']
      vm.$mount()
      let strong = vm.$el.querySelector('#test')
      expect(strong).to.exist
    })

    it('接受 position', () => {
      const Construtor = Vue.extend(Toast)
      const vm = new Construtor({
        propsData: {
          position: 'bottom'
        }
      }).$mount()
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    })
  })
})
