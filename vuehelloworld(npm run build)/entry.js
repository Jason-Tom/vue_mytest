var Vue = require("vue");
// vue的高级引入方式
var hello = require("vue!./index.vue");
// 变量名就是组件本身，不用id指定
new Vue({
    el: "body",
    components: {
        hello: hello
    }
});
