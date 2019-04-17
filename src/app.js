import Vue from 'vue/dist/vue'
import Button from './button'
import Icon from "./icon"

Vue.component('n-icon', Icon)


new Vue({
    el: '#app',
    components:{
        "n-button": Button
    }

}) 