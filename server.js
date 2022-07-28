const http = require("http");
const html = require("fs").readFileSync("./html/index.html");
const PORT = 8000;

//webサーバーを作る
//自働リロードにするには、package.jsonのscriptsをnodemonにする
const server = http.createServer((req, res) => {
    //ブラウザからアクセスが来た時の処理
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(html);
    res.end();

    if (req.method === "GET") {
        
    }

    if (req.method === "POST") {
        
    }
});

server.listen(PORT, () => {
    console.log("server lanning!!");
});