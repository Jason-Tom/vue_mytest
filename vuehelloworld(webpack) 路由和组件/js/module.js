function Hello() {
    this.sayHello = function() { 
    console.log('Hello ok'); 
  }; 
};
module.exports = Hello;
// 这种创建方法要创建对象