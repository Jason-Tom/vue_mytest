var Foo = Vue.extend({
        template: '<p>This is foo!</p>'
            // 如何用template文件分离出来？？？？？
    })
    // 注册全局组件
var Bar = Vue.extend({
        template: '<p>This is bar!</p>'
    })
    // var App = Vue.extend({})
    // 对象指定方法，便于书写
var router = new VueRouter()
    // 创建路由实例，调用路由方法
    // 创建多个路由？
router.map({
    // 对象、键值对、数组
    '/foo': {
        component: Foo
            // 嵌套路由？？？？
    },
    '/bar': {
        // 键值对对应全局组件
        component: Bar
    }
})
router.start(Vue.extend({}), '#app')
    // 创建路由根实例，传递实例id
    // 指定路由作用范围
