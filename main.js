// server.js
var jsonServer = require('json-server');
var server = jsonServer.create();
var middlewares = jsonServer.defaults();
var path = require('path');
var db = path.resolve('db', process.env.DB || 'default.json');
var router = jsonServer.router(db);

server.use(middlewares);

server.use(router);
server.listen(process.env.PORT || 3000, function () {
  console.log('JSON Server is running');
});