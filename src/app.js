import Vue from 'vue/dist/vue'
import Button from './button'
import Icon from './icon'
import buttonGroup from './n-button-group'
import Input from './input.vue'

Vue.component('n-icon', Icon)


new Vue({
    el: '#app',
    components:{
        "n-button": Button,
        "n-button-group": buttonGroup,
        "n-input": Input
    },
    data(){
        return{
            loading: false
        }
    }

}) 

