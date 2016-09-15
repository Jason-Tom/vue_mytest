var Vue = require("vue");
var gagaga = require("./gagaga.vue");
var hello = require("./index.vue");
// 导入组件

new Vue({
    el: "body",
    components: {
        hello: hello,
        gagaga: gagaga
        // 注册组件
    }
});