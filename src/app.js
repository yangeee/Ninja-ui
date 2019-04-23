import Vue from 'vue/dist/vue'
import Button from './button'
import Icon from "./icon"
import buttonGroup from "./n-button-group"

Vue.component('n-icon', Icon)


new Vue({
    el: '#app',
    components:{
        "n-button": Button,
        "n-button-group": buttonGroup
    },
    data(){
        return{
            loading: false
        }
    }

}) 

import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)
const expect = chai.expect

{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon: 'settings'
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')
    button.$el.remove()
    button.$destroy()

}

{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon: 'settings',
            loading: true
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    button.$el.remove()
    button.$destroy()
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon: 'settings',
            iconPosition: 'left'

        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    button.$el.remove()
    button.$destroy()
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    button.$el.remove()
    button.$destroy()
}
// mock
{
    const Constructor = Vue.extend(Button)
    const gButton = new Constructor({
        propsData:{
            icon: 'settings',
        }
    })
    gButton.$mount()
    let spy = chai.spy(function(){console.log(1)})
    gButton.$on('click',spy)
    let button = gButton.$el
    button.click()
}