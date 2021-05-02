'use strict';

// 引入hello模块:
var hello = require('./hello');
var fs = require('fs');
var s = 'Michael';

hello.greet(s); // Hello, Michael!
hello.respect(s);


// var data = 'Hello, Node.js';
// fs.writeFile('output.txt', data, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('ok.');
//     }
// });

// fs.readFile('output.txt','utf-8',function(err,data){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// fs.stat('output.txt', function (err, stat) {
//     if (err) {
//         console.log(err);
//     } else {
//         // 是否是文件:
//         console.log('isFile: ' + stat.isFile());
//         // 是否是目录:
//         console.log('isDirectory: ' + stat.isDirectory());
//         if (stat.isFile()) {
//             // 文件大小:
//             console.log('size: ' + stat.size);
//             // 创建时间, Date对象:
//             console.log('birth time: ' + stat.birthtime);
//             // 修改时间, Date对象:
//             console.log('modified time: ' + stat.mtime);
//         }
//     }
// });

// var fsstat = fs.statSync('output.txt');
// console.log('isFile: ' + fsstat.isFile());
// console.log('isDirectory: ' + fsstat.isDirectory());
// console.log('size: ' + fsstat.size);
// // 创建时间, Date对象:
// console.log('birth time: ' + fsstat.birthtime);
// // 修改时间, Date对象:
// console.log('modified time: ' + fsstat.mtime);

// 打开一个流:
var rs = fs.createReadStream('output.txt', 'utf-8');

rs.on('data', function (chunk) {
    console.log('DATA:')
    console.log(chunk);
});

rs.on('end', function () {
    console.log('END');
});

rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});

var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END.');
ws1.end();

var ws2 = fs.createWriteStream('output2.txt');
ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
ws2.write(new Buffer('END.', 'utf-8'));
ws2.end();

//pipe
var rs = fs.createReadStream('sample.txt');
var ws = fs.createWriteStream('copied.txt');

rs.pipe(ws);

rs.pipe(ws, { end: false });


var rs = fs.createReadStream('sample.txt', 'utf-8');

rs.on('data', function (chunk) {
    console.log('DATA1:')
    console.log(chunk);
});


rs.on('data', function (chunk) {
    console.log('DATA2:')
    console.log(chunk);
});