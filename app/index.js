const crawler = require('./crawler.js');

var http = require("http");

var server = http.createServer(function(request,response){
      var result = crawler.getInfo();
      
      response.writeHead("200", { 'Content-Type': 'text/html' }); 
      response.write(result);
      response.end();
      
});

server.listen(8080,'0.0.0.0',function(){
  console.log("[INFO]"+crawler.getDateTimeString()+" Web Crawler Sinesp-cidadao iniciado!");
});
