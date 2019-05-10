import Vue from 'vue/dist/vue'
import Button from './button'
import Icon from './icon'
import buttonGroup from './n-button-group'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Header from './header.vue'
import Footer from './footer.vue'
import Layout from './layout.vue'
import Sider from './sider.vue'
import Content from './content.vue'
import Toast from './toast.vue'



Vue.component('n-icon', Icon)


new Vue({
    el: '#app',
    components:{
        "n-button": Button,
        "n-button-group": buttonGroup,
        "n-input": Input,
        "n-row": Row,
        "n-col": Col,
        "n-header": Header,
        "n-sider": Sider,
        "n-layout": Layout,
        "n-footer": Footer,
        'n-content': Content,
        "n-toast": Toast
    },
    data(){
        return{
            loading: false,
            message: '杨艺'
        }
    },
    methods:{
        inputChange(){
            console.log(1)
        }
    },
    created(){
        this.$toast()
    }

}) 

