<template>
    <h2>Hello, World22222!</h2>
    <button type="button" class="btn btn-success">button</button>
    <button type="button" class="btn btn-primary">button</button>
    <button>gagaga</button>
    <h2>创建模态框（Modal）</h2>
    <!-- 按钮触发模态框 -->
    <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
        开始演示模态框
    </button>
    <!-- 模态框（Modal） -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        &times;
                    </button>
                    <h4 class="modal-title" id="myModalLabel">
          模态框（Modal）标题
        </h4>
                </div>
                <div class="modal-body">
                    在这里添加一些文本
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭
                    </button>
                    <button type="button" class="btn btn-primary">
                        提交更改
                    </button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal -->
    </div>
</template>
<script>
module.exports = {
        data: function() {
            return {
                greeting: 'lalala!'
            };
        }
    }
    // var $ = require('jquery');
// import $ from 'jquery'
// import './myjs.js'
// import './bootstrap.css'
// 可以这样引入js
// $(document).ready(function() {
    // $("button").click(function() {
    //     alert("hahaha");
    // });
// });
</script>
<style scoped>
/*放置css污染,内部样式优先，外部样式可以控制内部样式,打包的样式可以覆盖他（用作通用css）*/

h2 {
    color: green;
}

button {
    /*background-color: green;*/
}
</style>
