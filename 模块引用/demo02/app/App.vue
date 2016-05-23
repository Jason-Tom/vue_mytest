<template>
  <h1 class="app_html">{{ msg }}</h1>
</template>

<script>

var css = require('./app.css');
var exp = require('./data.js');

module.exports = {
  data: exp.dataR
}
</script>