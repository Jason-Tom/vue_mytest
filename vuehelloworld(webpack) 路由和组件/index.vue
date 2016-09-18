<template>
    <h2>Hello, World22222!</h2> {{greeting}}
    <button @click='gagaga'>点我</button>
</template>
<script>
/*组件的js不要放在入口，异步加载可能会干扰*/
module.exports = {
    // 组件的事件和方法都要放在一个接口里面
    data: function() {
        return {
            greeting: 'lalala!'
        };
    },
    methods: {
        gagaga: function() {
            alert('啊哈哈哈');
        }
    }
}

var $ = require('jquery');
// 组件导入方法和入口文件导入方法一样
$(document).ready(function() {
    alert("gagaga");
});
</script>
<style>
h2 {
    color: blue;
}
</style>
