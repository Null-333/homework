var l = {x: 10};
var g = l;
l.y = l = {x: 200};

console.log('====-5', l.y);