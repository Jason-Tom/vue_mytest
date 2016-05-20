new Vue({
    el: '#app',
    data: {
        isA: true,
        isB: false,
        message: 'Hello Vue.js!',
        One: "one",
        Two: "two"
    }
})

new Vue({
    el: '#app1',
    data: {
        isA: true,
        isB: false,
        message: 'Hello Vue.js!',
        One: "one",
        Two: "two"
    }
})

new Vue({
    el: '#app2',
    data: {
        activeColor: 'red',
        message: 'Hello Vue.js!',
        fontSize: 30
    }
})
new Vue({
    el: '#app3',
    data: {
        three: {
            // 样式名后面对应的是字符串
            fontSize: '30px',
        },
        four: {
            color: 'blue'
        },
        shuzu: [{
            fontSize: 30
        }, {
            color: 'blue'
        }],
        message: 'Hello Vue.js!'
    }
})
