// 一个根实例不能有同名组件
Vue.component('my-component', {
    template: '<span>this is my-component!</span>'
})

Vue.component('my-one', {
    template: '<div>this is my-one!</div>'
})

Vue.component('my-two', {
    template: '<div>this is my-two!</div>'
})

Vue.component('br-par', {
    // props:['par','par2'],
    // 指定变量输入类型，类型不对，会出现输出异常
    props: {
        par: String,
        par2: Number,
    },
    // 爽大括号输出可以有多个，也可以一个输出多个变量
    template: '<div>测试变量输入：{{par+" "+par2}}</div>'
})
