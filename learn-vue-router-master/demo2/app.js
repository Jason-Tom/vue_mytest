// Define some components
var Foo = Vue.extend({
        template: '<div class="foo">' +
            '<h2>This is Foo!</h2>' +
            '<router-view></router-view>' + // <- nested outlet
            '</div>'
    })
    // 自定义一个组件或者导入组件

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
})

var Baz = Vue.extend({
    template: '<p>This is baz!</p>'
})

// The router needs a root component to render.
// For demo purposes, we will just use an empty one
// because we are using the HTML as the app template.
var App = Vue.extend({})

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter()

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
    '/foo': {
        component: Foo,
        subRoutes: {
            '/': {
                component: {
                    template: '<p>Default sub view for Foo</p>'
                }
            },
            '/bar': {
                component: Bar
            },
            '/baz': {
                component: Baz
            }
        }
    }
})

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, '#app')
