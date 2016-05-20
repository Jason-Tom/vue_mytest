// // 定义
// var MyComponent = Vue.extend({
//     template: '<div>A custom component!</div>'
// })

// // 注册
// Vue.component('my-component', MyComponent)

// 定义
var one = Vue.extend({
    template: '<div>局部组件测试one!</div>'
})

var two = Vue.extend({
    template: '<my-one></my-one><div>局部组件测试two!</div>',
    // 要先有定义再进行注册，局部注册只能是放在父组件里面使用，html文件里面的都是全局注册的组件
    components: {
        'my-one': one
    }
})

Vue.config.debug = true;

Vue.component('my-two', two)

// 创建根实例
new Vue({
    el: '#example',
    data: {
        shuju: [
            { text: "one" },
            { text: "two" },
            { text: "three" },
        ]
    }
})

new Vue({
    el: '#example2',
    data: {
        shuju: [
            { text: "one" },
            { text: "two" },
            { text: "three" },
        ]
    }
})

var four = Vue.extend({
    template: '<my-three></my-three><div>局部组件测试four!</div>',
    // 要先有定义再进行注册，局部注册只能是放在父组件里面使用，html文件里面的都是全局注册的组件
    components: {
        'my-three': {
            template: '<div>局部组件测试three!</div>'
        }
    }
})

Vue.component('my-four', four)
new Vue({
    el: '#example3'
})



var five = Vue.extend({
    props: ['msG'],
    template: '<div>使用 Props 传递数据测试five!</div><span>{{ msG }}</span>'
})

Vue.component('my-five', five)
new Vue({
    el: '#example4'
})

var six = Vue.extend({
    props: ['myMessage'],
    template: '<div>使用 Props 传递数据测试sisx !<span>{{ myMessage }}</span></div>'
})

// Vue.component('my-six', six)

var seven = Vue.extend({
    template: '<my-six my-message="hello！ "></my-six><div>{{msg}}局部组件测试seven!</div>',
    // 要先有定义再进行注册，局部注册只能是放在父组件里面使用，html文件里面的都是全局注册的组件
    props:['msg'],
    components: {
        'my-six':six
    }
})

Vue.component('my-seven', seven)
new Vue({
    el: '#example5',
    // 动态 Props，即变量是通过注册标签中的变量来动态制定
    data:{
        textbox:''
    }
})

var night = Vue.extend({
    props: ['myMessage'],
    template: '<div>使用 Props 传递数据测试sisx !<span>{{ myMessage }}</span></div>'
})
var eight = Vue.extend({
    template: '<my-night :my-message.once="hello！ "></my-night><div>{{msg}}局部组件测试eight!</div>',
    // 要先有定义再进行注册，局部注册只能是放在父组件里面使用，html文件里面的都是全局注册的组件
    props:['msg'],
    components: {
        'my-night':night
    }
})

Vue.component('my-eight', eight)
new Vue({
    el: '#example6',
    // 动态 Props，即变量是通过注册标签中的变量来动态制定
    data:{
        textbox:''
    }
})

var ten = Vue.extend({
    props: ['myMessage'],
    template: '<div>使用 Props 传递数据测试sisx !<span>{{ myMessage }}</span></div>'
})
var eleven = Vue.extend(



{
    template: '<my-ten :my-message.once="hello！ "></my-ten><div>{{msg}}局部组件测试eleven!</div>',
    // 要先有定义再进行注册，局部注册只能是放在父组件里面使用，html文件里面的都是全局注册的组件
    props:{'msg':Number},
    components: {
        'my-ten':ten,
        'sdgsdg':sdgsdg
    }
}



)

Vue.component('my-eleven', eleven)
new Vue({
    el: '#example7',
    // 动态 Props，即变量是通过注册标签中的变量来动态制定
    data:{
        textbox:'',
        num:25
    }
})