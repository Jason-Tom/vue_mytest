// 定义
var MyComponent = Vue.extend({
    template: '<div>A custom component!</div>'
})

// 注册
Vue.component('my-component', MyComponent)
    // 定义
var one_test = Vue.extend({
    template: '多测试'
})

// 注册
Vue.component('lalala', one_test)
