// entry.js
var Vue = require('vue');
var hello = require('./index.vue')
// 要导入很多包
require('./style.css')

new Vue({
    el: "body",
    components: {
        hello: hello
    }
});
// 组件还要注册