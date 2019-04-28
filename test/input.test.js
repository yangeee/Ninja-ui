const expect = chai.expect;
 import Vue from 'vue'
 import Input from '../src/input'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Input', () => {
     it('存在', () => {
         expect(Input).to.exist
     })

     
     describe('props', ()=>{
        const Constructor = Vue.extend(Input)        
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
        it('接收value', ()=>{
            vm = new Constructor({
            propsData: {
                value: '12345'
            }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('12345')
         })
         it('接收disabled', ()=>{
            vm = new Constructor({
            propsData: {
                disabled: true
            }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
         })
         it('接收readonly', ()=>{
            vm = new Constructor({
            propsData: {
                readonly: true
            }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
         })
         it('接收error', ()=>{
            vm = new Constructor({
            propsData: {
                error: '你错了'
            }
            }).$mount()
            const userElement = vm.$el.querySelector('use')
            expect(userElement.getAttribute("xlink:href")).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('你错了')
         })
     })
     
     describe('事件', ()=>{
        const Constructor = Vue.extend(Input)        
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
         it('支持 change/input/focus/blur 事件', ()=>{
             ['change', 'input', 'focus', 'blur'].forEach((eventName)=>{
                vm = new Constructor({}).$mount()
                const callback = sinon.fake()
                vm.$on(eventName, callback)
                let event = new Event(eventName)
                Object.defineProperty(
                    event,'target', {
                        value:{value: 'hi'}, enumerable: true
                    }
                )
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.called.calledWith('hi')
             })
         })
     })
 })