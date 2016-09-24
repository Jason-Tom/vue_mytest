var VueRouter = require('vue-router');
var Vue = require('vue');
Vue.use(VueRouter)
var App = Vue.extend({})
var router = new VueRouter()
router.map({
    '/foo': {
        component: require('./index.vue')
    }
})
router.start(App, '#body')
