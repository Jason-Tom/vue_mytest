<template>
    <h2>Hello, World!</h2>
</template>
<script>
require('./style.css')
    // 可以在组件script那里导入样式文件
    // 打包转换
module.exports = {
    data: function() {
        return {
            greeting: 'lalala!'
        };
    }
}
</script>
<!-- <link rel="stylesheet" type="text/css" href="style.css"> -->
<!-- 不能这样导入css样式 -->
<style>
h2 {
    color: lightgreen;
}
</style>
