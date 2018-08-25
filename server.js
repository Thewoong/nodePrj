
const http = require("http");
http.createServer((request, response) =>{
    
    return request
        .on("error", (err)=>{
            console.error(err);
        })
        .on("data", (data)=>{
            console.log(data);
        })
        .on("end", () => {
            response.on("error", (err) => {
                console.log(err);
            });
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/plain");
            response.write("asdfasdf\n");
            response.end("the end");
        });


        

}).listen(8012);