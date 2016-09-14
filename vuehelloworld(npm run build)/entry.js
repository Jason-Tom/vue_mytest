var Vue = require("vue");
// vue的高级引入方式
var hello = require("vue!./index.vue");

new Vue({
    el: "body",
    components: {
        hello: hello
    }
});
