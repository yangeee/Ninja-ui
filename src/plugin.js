import Toast from "./toast";
export default{
    install(Vue, options){
        Vue.prototype.$toast = function (message, props) {
            let Construtor = Vue.extend(Toast)
            let toast = new Construtor({
                propsData: props       
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}