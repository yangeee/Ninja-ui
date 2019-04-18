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