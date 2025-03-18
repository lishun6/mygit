const fs=require("fs");
const path=require("path");

fs.readFile(path.join(__dirname,"demo1.html"),(err,data)=>{
    if(err) console.log("打开失败!");
    else{
        let s=data.toString();
       let st=s.replace(/[\r\n]/g,"");
    //    console.log(st);
       fs.writeFile(path.join(__dirname,"demo2.html"),st,(err)=>{
            if(err) console.log("重写失败!");
            else console.log("重写成功!");
        })
    }

})