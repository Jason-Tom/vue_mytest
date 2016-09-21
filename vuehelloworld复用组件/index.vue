<template>
    {{greeting}}{{msg}}<br>
</template>
<script>
module.exports = {
    data: function() {
        return {
            greeting: '成功啦！！！！！！！!'
        };
    },
    props: ['msg'],
    methods: {
        gagaga: function() {
            alert('啊哈哈哈');
        }
    }
}
</script>
<style>
</style>
