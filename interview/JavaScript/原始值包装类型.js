// 原始值本身不是对象,但是确实调用对象上的方法

let s1 = "some text";
let s2 = s1.substring(2);
console.log(s2);

// 等价于 

let s3 = new String('some text');
let s4 = s1.substring(2);
s3 = null;
console.log(s4);