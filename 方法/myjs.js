new Vue({
    el: 'body',
    methods: {
        // 可以定义多个方法，用逗号隔开，和原生的定义形式稍有区别
        say: function(msg) {
            alert('say: function(msg)'+msg)
        },
        greet: function() {
            alert('Hello ')
        },
        // 不要方法能重名,不知道如何重载方法，
        say1: function(msg, n, event) {
            // 现在我们可以访问原生事件对象
            alert('say: function(msg, n, event)'+msg + n + '!')
        }
    }
})
