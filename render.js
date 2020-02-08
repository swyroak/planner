var http = require('http');   // httpオブジェクト(通信等に利用する)を使えるように
var fs = require("fs");         //  fsオブジェクト(ファイルの取得に使用する)を使えるように

var server = http.createServer();
server.on("request", doRequest).listen(8080, '127.0.0.1');
console.log("server runnnig");
//  上記3文はサーバー起動のための決まり文句、ポート番号とホストは自分で指定できます。


//  以下の関数はサーバーにリクエストがあったときに実行されます。
function doRequest(req, res) {
    fs.readFile('./index_render.html', 'UTF-8', function (err, data) {
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end();
    });
}