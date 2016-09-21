// var lalala = require('./js/myjs1.js');
require('./js/myjs1.js');
// 里面没有封装，直接导入
var hello = require('./js/module.js');
var Hello = require('./js/module');
// 导入自定义模块，后面能省略.js
hello = new Hello();
// 创建对象，导入的封装模块不用创建对象
hello.sayHello();
hello.sayHello();

var hahaha = require('./js/advance');
hahaha.world();
// var jjj=new hahaha();
// jjj.world();

var aaa = require('./js/中文');
aaa.a();
// 能重复使用
// js  chucuo buhuijixuzhixing  
// var lalala = require('./js/myjs1.js');
// 重复导入会覆盖
// 导入的文件变量会解析出来，通过点号调用相关方法，语句的话直接打入的时候就执行了
// 里面的js是异步加载的,但是有的文件导入是有顺序的
// var Vue = require('vue');
require('./mycss.css');
// 导入的文件要重新打包
// index.html不用重新打包
var VueRouter = require('vue-router');
var $ = require('./js/jquery.js');
// 善用npm包管理
var Vue = require('./js/vue.js');
// 导入自己的js文件，要加上也要加上变量获取
// 无论是导入本地还是module里面的js文件，都要给该库添加标识
// require('./js/myjs.js');
// js文件里面还想导入其他计算文件（用require引入）
Vue.use(VueRouter)

Vue.config.debug = true

var App = Vue.extend({})

var router = new VueRouter()

router.map({
    '/foo': {
        component: require('./index.vue')
    }
})
router.start(App, '#body')
    // 指定路由作用范围，配置的路由会在这个范围起作用

$(document).ready(function() {
    // $("button").click(function() {
        alert("测试jquery是否能动态导包");
        // 不支持
    // });
});
// var $ = require('jquery');
