const path=require('path');
// console.log(__dirname);
const fs=require('fs');
fs.readFile(path.join(__dirname,'01.txt'),(err,data)=>{
    if(err) console.log("打开失败!");
    else console.log(data.toString());
})