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

Vue.component('br-par',{
  props:['par'],
  template:'<div>测试变量输入：{{par}}</div>'
})