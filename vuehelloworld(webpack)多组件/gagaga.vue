<template>
    <h2>gagaga!</h2>
</template>
<script>
module.exports = {
    data: function() {
        return {
            greeting: 'lalala!'
        };
    }
}
</script>
<style>
h2 {
    color: red;
}


/*各自的样式放在一个文件的时候，会出现覆盖，同级的，后面导入的属性覆盖前面的*/
</style>
