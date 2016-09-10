var lalala = `<div>A custom 
        component!</div>`
    // es6语法能换行
    // 定义
var MyComponent = Vue.extend({
    // template: '<div>A custom component!</div>'
    template: lalala
})

// 注册
Vue.component('my-component', MyComponent)

// 创建根实例（有多个根实例怎么办？）
// 指定组件指定作用的区域
new Vue({
    el: '#example'
})
