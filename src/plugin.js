import Toast from "./toast";
export default{
    install(Vue, options){
        Vue.prototype.$toast = function (message) {
            let Construtor = Vue.extend(Toast)
            let toast = new Construtor()
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}