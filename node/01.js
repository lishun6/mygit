const fs=require("fs");
fs.writeFile("./01.txt","6666",(err)=>{
    if(err) throw err;
   else console.log("写入成功！");
    
})
fs.readFile("./01.txt",(err,data)=>{
    if(err) console.log("File read failed!");
    else console.log(data.toString());
})