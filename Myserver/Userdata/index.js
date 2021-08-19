const http=require('http');
const fs = require('fs');
// const url=require('url'); // not needed

const jsndata = fs.readFileSync("F:/NODEJS/NodeJs-tuts/Myserver/Apiuser/Userapi.json","utf-8");
const obj = JSON.parse(jsndata);

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if(req.url=="/") {res.end("Hii..This is kartik's server");}
    else if(req.url=="/about") {res.end("This is about page");}
    else if(req.url=="/contact") {res.end("This is contact page");}
    else if(req.url=="/userapi") {
        // fs.readFile("F:/NODEJS/NodeJs-tuts/Myserver/Apiuser/Userapi.json","utf-8", (err,data)=>{
        //         console.log(data);
        //         res.writeHead(200,{"content-type":"application/json"})
        //         res.end(data);
                // const obj=JSON.parse(data);
                // res.end(obj[2].name);
            // })
        // fs.readFile(`${__dirname}/Apiuser/Userapi.json`,"utf-8", (err,data)=>{
        //     console.log("api displayed");
        //     console.log(data);
        // })
        res.writeHead(200,{"content-type":"application/json"})
        // res.end("This is Api page");
        res.end(obj[0].name);
    }
    else {
        res.writeHead(404, {"Content-type" : "Text/html"});
        res.end("404 error!! The page is not found");}
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("listening port no 8000");
});