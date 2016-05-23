new Vue({
    el: 'body',
    // 注意格式，没想之间用逗号隔开，去中文字符
    data: {
        // 数据格式 数据名：对象（对象有多种）
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
            message: 'message_one',
            one: '1!'
        }, {
            message: 'message_two',
            one: 1
        }]
    }
})
