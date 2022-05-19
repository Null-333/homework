/*
  将下面异步代码使用 Promise 的方法改进
  尽量用看上去像同步代码的方式
  setTimeout(function () {
    var a = 'hello'
    setTimeout(function () {
      var b = 'lagou'
      setTimeout(function () {
        var c = 'I ♥ U'
        console.log(a + b +c)
      }, 10)
    }, 10)
  }, 10)
*/
new Promise((resolve) => {
    const a = 'hello';
    setTimeout(() => resolve(a), 10);
}).then((a) => {
    const b = 'lagou';
    return new Promise((resolve) => setTimeout(() => resolve([a, b]), 10));
}).then(([a, b]) => {
    const c = 'I ♥ U';
    setTimeout(() => console.log(a + b +c), 10);
});


