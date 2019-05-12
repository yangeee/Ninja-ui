import Toast from './toast'

let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastOptions) {
        if(currentToast){
            currentToast.close()
        }
        currentToast = createToast({Vue, message, propsData: toastOptions})
    }
  }
}




function createToast({ Vue, message, propsData }) {
  let Construtor = Vue.extend(Toast)
  let toast = new Construtor({ propsData })
  toast.$slots.default = [message]
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}
