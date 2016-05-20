new Vue({
    el: 'body',
    // 注意格式，没想之间用逗号隔开，去中文字符
    data: {
        // 单项数据，直接名字对应数据
        ee: 'lalala',
        // 数据对象集合
        dd: {
            one: 'hahaha',
            two: 'xixi',
        },
        test: {
            message: 'message!',
            one: 'one!'
        },
        // 数组对象，一定通过v-for访问吗？
        shuzu: [{
            message: 'Hello Vue.js!',
            one: 'one!'
        }, {
            message: 'Hello Vue.js!',
            one: 'one!'
        }]
    }
})
