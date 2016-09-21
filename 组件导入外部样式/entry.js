// entry.js
var Vue = require('vue');
var hello = require('./index.vue')
    // 要导入很多包
require('./style.css')
    // 需要打包的文件和要创建对象的文件要导入打包

new Vue({
    el: "body",
    components: {
        hello: hello
    }
});
// 组件还要注册
