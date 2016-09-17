var Vue = require('vue');
require('./mycss.css');
var VueRouter = require('vue-router');
var $ = require('./js/jquery.js');
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
    $("button").click(function() {
        alert("hahaha");
    });
});