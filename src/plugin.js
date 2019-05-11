import Toast from "./toast";
export default{
    install(Vue, options){
        Vue.prototype.$toast = function (message) {
            let Construtor = Vue.extend(Toast)
            let toast = new Construtor({
                propsData: {
                    closeButton:{
                        text: '知道了',
                        callback: (toast) => {
                            console.log('我知道了')
                        }//可以返回此toast实例，调用里面的方法
                    }
                }
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}