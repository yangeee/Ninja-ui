const expect = chai.expect;
 import Vue from 'vue/dist/vue'
 import Popover from '../src/popover'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Popover', () => {
     it('存在', () => {
         expect(Popover).to.exist
     })
     it('可以设置position', (done) => {
        Vue.component('n-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <n-popover position="bottom" ref="a">
            <template slot="content">
            弹出内容
            </template>
            <button>点我</button>
        </n-popover>
        `
        const vm = new Vue({
            el: div
        })
        vm.$el.querySelector('button').click()
        vm.$nextTick(()=>{
            const {contentWrapper} = vm.$refs.a.$refs
            expect(contentWrapper.classList.contains('position-bottom')).to.be.true
            done()
        })
     })
     /* it('可以设置loading.', () => {
         const Constructor = Vue.extend(Button)
         const vm = new Constructor({
         propsData: {
             icon: 'settings',
             loading: true
         }
         }).$mount()
         const useElements = vm.$el.querySelectorAll('use')
         expect(useElements.length).to.equal(1)
         expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
         vm.$destroy()
     }) */ 
 })