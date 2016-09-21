var Vue = require('./js/vue.js');
new Vue({
  el: '#app',
  data: {
    message: '成功啦！！！！！！！!'
  },
  components: {
    'my-component': require('./index.vue')
  }
})