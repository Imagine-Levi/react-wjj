const http = require('http'),
  httpProxy = require('http-proxy'),
  fs = require('fs'),
  url = require('url'),
  path = require('path'),
  mime = require('./mime').types;

let proxy = httpProxy.createProxyServer({
  target: 'http://127.0.0.1:3000',
  secure: false
})

proxy.on('error', function (err, request, response) {
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  })
  console.log(err)
  res.end('Something went wrong.')
})

let server = http.createServer((request, response)=> {
  let pathName = url.parse(request.url).pathname;
  let realPath = request.url.substring(1);
  let extName = realPath;
  let indexOfQuestionMark = extName.indexOf('?');

  if(indexOfQuestionMark >= 0){
    extName = extName.substring(0, indexOfQuestionMark);
    realPath = realPath.substring(0, indexOfQuestionMark);
  }

  extName = path.extname(extName);
  extName = extName ? extName.slice(1) : 'unknown';
  console.log(111)
  if(/\/api\/.*$/.test(pathName)){
    proxy.web(request, response);
    return;
  }

  if(!fs.existsSync(realPath)){
    response.writeHead(404, {'content-type': 'text/plain'});
    response.write('The request URL:' + realPath + ' could not be found.');
    response.end();
    return;
  }

  fs.readFile(realPath, 'binary', function(err, file){
    if(err){
      response.writeHead(500, {'content-type': 'text/plain'});
      response.end(err);
      return;
    }

    let contentType = mime[extName] || 'text/plain';
    response.writeHead(200, {'content-type': contentType});
    response.write(file, 'binary');
    response.end();
  });
});

console.log('listening on port 3000')

server.listen(3000);