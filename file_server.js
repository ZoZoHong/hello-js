'use strict';

var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

// 从命令行参数获取root目录,默认是当前目录
var root = path.resolve(process.argv[2]||'./path/to/dir');
console.log('Static root dir: ' + root);

//如果遇到请求的路径是目录，则自动在目录下依次搜索index.html、default.html
function handleIndex(pathList,response){
    var flag_path;
    var flag = pathList.some(path_ele=>{
            if(fs.existsSync(path_ele)){
                let stats = fs.statSync(path_ele);
                if(stats.isFile()){
                    flag_path = path_ele;
                    return true;
                }
            }
            return false;       
        });
        if(flag){
            response.writeHead(200);
            fs.createReadStream(flag_path).pipe(response);
        } else {
            response.writeHead(404);
            response.end('404 Not Found');
        }
    }

//创建服务器
var server = http.createServer(function(request, response) {
    //获取url的path,类似/css/bootstrap.css;
    var pathname = url.parse(request.url).pathname;
    //获取对应的本地文件路径,类似'/srv/www/css/bootstrap.css';
    var filepath = path.join(root,pathname);
    console.log('读取filepath'+ filepath);
    //获取文件状态 status
    fs.stat(filepath,function(err,stats){
        if (!err && stats.isDirectory()){
            let pathList = [path.join(filepath,'index.html'),path.join(filepath,'default.html')];
            handleIndex(pathList,response);
        } else if(!err && stats.isFile()){
            //没有出错且文件存在
            console.log('200 ' + request.url);
            //发送200响应
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        } else {
            //出错了或者文件不存在
            console.log('404 '+request.url);
            //发送404响应
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});
//error 把监听放在了fs里面

server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');

