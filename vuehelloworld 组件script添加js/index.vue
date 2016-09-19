<template>
    <h2>Hello, World!</h2>
</template>
<!-- <script type="text/javascript" src='jquery.js'></script> -->
<script>
module.exports = {
    data: function() {
        return {
            greeting: 'lalala!'
        };
    }
}
var $ = require('./jquery');
$(document).ready(function() {
    alert("测试jquery能否在组件通过script加载（不能，只能在script里面加载））热监听");
});
</script>
<style>
h2 {
    color: blue;
}
</style>
