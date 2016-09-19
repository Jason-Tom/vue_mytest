// require('!style!css!./style.css')
var Vue = require("vue");
var hello = require("./index.vue");
new Vue({
    el: "body",
    components: {
        hello: hello
    }
});
// css文件也能导入，注意加载相应的包