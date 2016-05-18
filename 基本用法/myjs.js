new Vue({
    // 指定某块标签使用vue相关东西，里面实现 String | HTMLElement | Function具体调用
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    }
})

new Vue({
    el: '#one',
    // data一种用法，定义变量数据
    data: {
        message: 'lalala!',
        messagetwo: 'hahaha'
    }
})
new Vue({
    el: '#two',
    // data一种用法，定义变量数据
    data: {
        shuju: [
            { text: 'one' },
            { text: "two" },
            { text: 2 },
        ]
    }
})
new Vue({
    // el是id对应只能对应一次
    el: '#three',
    // data一种用法，定义变量数据
    data: {
        shuju: [
            { text: 'one' },
            { text: "two" },
            { text: 2 },
        ]
    }
})
