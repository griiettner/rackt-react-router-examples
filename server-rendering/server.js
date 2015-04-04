'use strict';

console.log('Initalizing server.');

var express = require('express');
var path = require('path');

var React = require('react');
var Router = require('react-router');

// Transparently support JSX
require('node-jsx').install({harmony: true});

var app = express();

var routes = require('./routes.jsx');

app.get('/', function(req, res) {
  var component = require('./components/App.jsx');
  var props = JSON.parse(req.query.props || '{}');

  Router.run(routes, req.query.url, function (Handler) {
    var html = React.renderToString(React.createElement(Handler, props));
    res.send(html);
  });
});

app.listen(3000);

console.log('Server listening on port 3000...');
