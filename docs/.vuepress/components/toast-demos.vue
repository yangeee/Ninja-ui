<template>
  <div>
    <n-button @click="showToast('top', false)">top</n-button>
    <n-button @click="showToast('middle', 10)">middle</n-button>
    <n-button @click="showToast('bottom', false)">bottom</n-button>
  </div>
</template>


<script>
import Toast from "../../../src/toast";
import Button from "../../../src/button";
import Vue from 'vue/dist/vue'



export default {
  components: {
    'n-button': Button,
    'n-toast': Toast,
  },
  created() {
  },
  data() {
    return {
      currentToast: null
    }

  },
  methods: {
    toast(message, toastOptions) {
      if (this.currentToast) {
        this.currentToast.close()
      }
      this.currentToast = this.createToast({
        Vue,
        message,
        propsData: toastOptions,
        onClose: () => {
          this.currentToast = null
        }
      })
    },
    createToast({ Vue, message, propsData, onClose }) {
      let Construtor = Vue.extend(Toast)
      let toast = new Construtor({ propsData })
      toast.$slots.default = [message]
      toast.$mount()
      toast.$on('close', onClose)
      document.body.appendChild(toast.$el)
      return toast
    },
    showToast(position, time) {
      this.toast('我是消息', {
        enableHtml: true,
        position,
        autoClose: time
      })
    }
  }
}
</script>


