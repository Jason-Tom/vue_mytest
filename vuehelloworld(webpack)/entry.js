var Vue = require("vue");
var hello = require("./index.vue");

new Vue({
    el: "body",
    components: {
        hello: hello
    }
});