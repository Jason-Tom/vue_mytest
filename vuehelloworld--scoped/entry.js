var Vue = require('vue');
// require('./mycss.css');
var VueRouter = require('vue-router');
// var $ = require('./js/jquery.js');
// var jQuery = require('./js/jquery.js');
// require('./js/jquery.js');
// var $ = require('jquery');
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

// $(document).ready(function() {
//     $("button").click(function() {
//         alert("hahaha");
//     });
// });