const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{
fs.createReadStream("index.html").pipe(res);
});

server.listen(process.env.PORT||8080);
