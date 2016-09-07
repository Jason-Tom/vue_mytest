// import Vue from 'vue'
var Vue = require('vue')
// 导入vue.js
// import App from './App'
var App = require('./App.vue')
/* eslint-disable no-new */
// 组件不能重复导入，组件注册前要导入
// 默认该js文件导入到index.html（其它组件要用到相应的js css（通过在template导入吗）？）
new Vue({
  el: 'body',
  components: { App }
  // 注册组件(在相应的界面)
})
// 只能做成单页面？
