var a = {n:1}
var b = a;
a.x = a ={n:2};
console.log(a)
console.log(b);
a.n=3;
console.log(a);