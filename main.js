// server.js
var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();

server.use(middlewares);

/**
 * Create Collection dinamically
 */
server.post('/db/:name', function (req, res) {
  var obj = {};
  obj[req.params.name] = [];
  // by default create an empty table named `name`
  router.db.defaults(obj).value();
  res.sendStatus(201);
});

server.use(router);
server.listen(process.env.PORT || 3000, function () {
  console.log('JSON Server is running');
});