const http=require('http');
const fs=require('fs');
const path=require('path');
const se=http.createServer();
se.on('request', (req, res) => {
    if(req.url==="/demo1.html"){
        fs.readFile(path.join(__dirname,"demo1.html"),(err,data)=>{
            if(err) console.log("打开失败!"); 
            else{
                res.setHeader('Content-Type', 'text/html;charset=utf-8');
                res.end(data.toString());
            }
        })
    }
    else{
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        res.end("404"); 
    }}
    );
se.listen(8080,()=>console.log("服务器启动成功！"));
