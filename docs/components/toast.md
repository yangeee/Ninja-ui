---
title: 'Toast - 消息提示'
---

# Toast 消息提示

<h2 style="margin-bottom:1em;">基本用法</h2>    

<clientOnly>
<toast-demos></toast-demos>
</clientOnly>

<h2>代码展示</h2>    

传入提示位置以及自动关闭时间参数
```vue
<n-button @click="showToast('top', 5)">top</n-button>
<n-button @click="showToast('middle', 10)">middle</n-button>
<n-button @click="showToast('bottom', false)">bottom</n-button>
```
将以下三个函数添加至methods：
```
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
```