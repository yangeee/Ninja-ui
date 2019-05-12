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
import plugin from './plugin'

Vue.component('n-icon', Icon)
Vue.use(plugin)

new Vue({
  el: '#app',
  components: {
    'n-button': Button,
    'n-button-group': buttonGroup,
    'n-input': Input,
    'n-row': Row,
    'n-col': Col,
    'n-header': Header,
    'n-sider': Sider,
    'n-layout': Layout,
    'n-footer': Footer,
    'n-content': Content,
    'n-toast': Toast
  },
  data() {
    return {
      loading: false,
      message: '杨艺'
    }
  },
  methods: {
    showToast(position) {
      this.$toast('<p>我是消息</p>', {
        enableHtml: true,
        position
      })
    },
    showToastTop() {
      this.showToast('top')
    },
    showToastMiddle() {
      this.showToast('middle')
    },
    showToastBottom() {
      this.showToast('bottom')
    },
    inputChange() {}
  },
  created() {}
})
