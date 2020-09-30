//0.安装
//1.引包
let express = require('express');
//2.创建服务器应用程序 也就是http.createServer
let app = express();
//获取静态资源 公开指定目录
//只要这样做了，你就可以直接通过/public/xx的方式访问public目录中的所有资源了
app.use('/public/',express.static('./public/'))
//当省略第一个参数的时候，则可以通过省略/public的方式来访问
app.use('express.static('./public/'))


//当服务器收到get请求 / 的时候，执行回调处理函数
app.get('/',function(req,res){
	res.send('hello express')
})
app.get('/about',function(req,res){
	res.send('您好，我是express')
})
// 相当于server.listen
app.listen(3000,function(){
	console.log('app is running at port 3000')
})