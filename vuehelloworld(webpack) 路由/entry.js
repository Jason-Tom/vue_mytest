var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter)

Vue.config.debug = true

var App = Vue.extend({})
    // var App = require('./App.vue');


var router = new VueRouter()

router.map({
    '/foo': {
        component: require('./index.vue')
    }
})

// router.redirect({
//     '*': '/'
// })

router.start(App, '#body')
