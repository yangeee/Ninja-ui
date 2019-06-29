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
import Tabs from './tabs.vue'
import TabsHead from './tabs-head.vue'
import TabsBody from './tabs-body.vue'
import TabsPane from './tabs-pane.vue'
import TabsItem from './tabs-item.vue'
import Popover from './popover.vue'
import Collapse from './collapse.vue'
import CollapseItem from './collapse-item.vue'




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
    'n-toast': Toast,
    'n-tabs': Tabs,
    'n-tabs-head': TabsHead,
    'n-tabs-body': TabsBody,
    'n-tabs-item': TabsItem,
    'n-tabs-pane': TabsPane,
    'n-popover': Popover,
    'n-collapse': Collapse,
    'n-collapse-item': CollapseItem
  },
  data() {
    return {
      loading: false,
      message: '杨艺',
      selectedTab: ['2']
    }
  },
  methods: {
    showToast(position, time) {
      this.$toast('<p>我是消息</p>', {
          enableHtml: true,
          position,
          autoClose: time
      })
    },
    showToastTop() {
      this.showToast('top', 5)
    },
    showToastMiddle() {
      this.showToast('middle', 10)
    },
    showToastBottom() {
      this.showToast('bottom', false)
    },
    inputChange() {}
  },
  created() {}
})
