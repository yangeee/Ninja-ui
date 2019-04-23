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

const expect = chai.expect

{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon: 'settings'
        }
    })
    button.$mount('#test')
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')

}